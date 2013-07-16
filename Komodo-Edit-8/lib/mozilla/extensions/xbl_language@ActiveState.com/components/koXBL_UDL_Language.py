# ***** BEGIN LICENSE BLOCK *****
# Version: MPL 1.1/GPL 2.0/LGPL 2.1
# 
# The contents of this file are subject to the Mozilla Public License
# Version 1.1 (the "License"); you may not use this file except in
# compliance with the License. You may obtain a copy of the License at
# http://www.mozilla.org/MPL/
# 
# Software distributed under the License is distributed on an "AS IS"
# basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
# License for the specific language governing rights and limitations
# under the License.
# 
# The Original Code is Komodo code.
# 
# The Initial Developer of the Original Code is ActiveState Software Inc.
# Portions created by ActiveState Software Inc are Copyright (C) 2000-2007
# ActiveState Software Inc. All Rights Reserved.
# 
# Contributor(s):
#   ActiveState Software Inc
# 
# Alternatively, the contents of this file may be used under the terms of
# either the GNU General Public License Version 2 or later (the "GPL"), or
# the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
# in which case the provisions of the GPL or the LGPL are applicable instead
# of those above. If you wish to allow use of your version of this file only
# under the terms of either the GPL or the LGPL, and not to allow others to
# use your version of this file under the terms of the MPL, indicate your
# decision by deleting the provisions above and replace them with the notice
# and other provisions required by the GPL or the LGPL. If you do not delete
# the provisions above, a recipient may use your version of this file under
# the terms of any one of the MPL, the GPL or the LGPL.
# 
# ***** END LICENSE BLOCK *****

# Komodo XBL language service.
#
# Generated by 'luddite.py' on Fri Oct 20 08:47:11 2006.
#

import logging
from xpcom import components
from xpcom.server import UnwrapObject
from koXMLLanguageBase import koXMLLanguageBase
from koLintResults import koLintResults

log = logging.getLogger("koXBLLanguage")
#log.setLevel(logging.DEBUG)


def registerLanguage(registry):
    log.debug("Registering language XBL")
    registry.registerLanguage(KoXBLLanguage())


class KoXBLLanguage(koXMLLanguageBase):
    name = "XBL"
    lexresLangName = "XBL"
    _reg_desc_ = "%s Language" % name
    _reg_contractid_ = "@activestate.com/koLanguage?language=%s;1" % name
    _reg_clsid_ = "{46D9A883-9410-47D2-B4CE-5D3186A6D4C8}"
    _reg_categories_ = [("komodo-language", name)]
    defaultExtension = '.xbl'

    lang_from_udl_family = {'CSL': 'JavaScript', 'M': 'XML'}

    publicIdList = ["-//MOZILLA//DTD XBL V1.0//EN"]
    systemIdList = ["http://www.mozilla.org/xbl"]
    namespaces = ["http://www.mozilla.org/xbl"]

    searchURL = "http://www.google.com/search?q=site%3Ahttp%3A%2F%2Fdeveloper.mozilla.org%2Fen%2Fdocs%2FXBL%3AXBL_1.0_Reference+%W"

    sample = """
<bindings xmlns="http://www.mozilla.org/xbl">
  <binding id="slideshow">

    <content>
      <xul:vbox flex="1">
        <xul:deck xbl:inherits="selectedIndex" selectedIndex="0" flex="1">
          <children/>
        </xul:deck>
        <xul:hbox>
          <xul:button xbl:inherits="label=previoustext"/>
          <xul:label flex="1"/>
          <xul:button xbl:inherits="label=nexttext"/>
        </xul:hbox>
      </xul:vbox>
    </content>

    <implementation>
      <constructor>
        var totalpages=this.childNodes.length;
        document.getAnonymousNodes(this)[0].childNodes[1].childNodes[1]
                .setAttribute("value",(this.page+1)+" of "+totalpages);
      </constructor>
  
      <property name="page"
            onget="return parseInt(document.getAnonymousNodes(this)[0].childNodes[0].getAttribute('selectedIndex'));"
            onset="return this.setPage(val);"/>
    </implementation>

  </binding>
</bindings>
"""

class KoXBLCompileLinter(object):
    _com_interfaces_ = [components.interfaces.koILinter]
    _reg_desc_ = "Komodo XBL Compile Linter"
    _reg_clsid_ = "{4e023df3-4fda-4c74-abe0-b6623d72862e}"
    _reg_contractid_ = "@activestate.com/koLinter?language=XBL;1"
    _reg_categories_ = [
         ("category-komodo-linter", 'XBL'),
         ]

    def __init__(self):
        koLintService = components.classes["@activestate.com/koLintService;1"].getService(components.interfaces.koILintService)
        self._html_linter = koLintService.getLinterForLanguage("HTML")
        self._js_linter = UnwrapObject(koLintService.getLinterForLanguage("JavaScript"))

    def lint(self, request):
        try:
            return UnwrapObject(self._html_linter).lint(request,
                                                        linters={"JavaScript":self})
        except:
            log.exception("Error linting XBL")

    # We can't use standard JS linting to handle XBL methods,
    # so wrap the JSLinter, and filter out results complaining
    # about return stmts outside functions.
    def lint_with_text(self, request, text):
        #log.debug("XBL text: %s", text)
        jsResults = self._js_linter.lint_with_text(request, text)
        #log.debug("XBL lint results: %s",
        #          [str(x) for x in jsResults.getResults()])
        fixedResults = koLintResults()
        for res in jsResults.getResults():
            if 'return not in function' not in res.description:
                fixedResults.addResult(res)
        return fixedResults