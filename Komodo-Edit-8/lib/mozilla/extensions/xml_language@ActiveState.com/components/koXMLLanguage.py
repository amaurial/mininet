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

from xpcom import components

from koLanguageServiceBase import *
from koXMLLanguageBase import koXMLLanguageBase

log = logging.getLogger('koXMLLanguage')

def registerLanguage(registery):
    registery.registerLanguage(koXMLLanguage())
    
class koXMLLanguage(koXMLLanguageBase):
    name = "XML"
    _reg_desc_ = "%s Language" % name
    _reg_contractid_ = "@activestate.com/koLanguage?language=%s;1" \
                       % (name)
    _reg_clsid_ = "{13CE88EE-3F2D-4ad4-8D33-CC8178E4BA26}"
    _reg_categories_ = [("komodo-language", name)]

    lexresLangName = "XML"
    lang_from_udl_family = {'M': 'XML'}

    accessKey = 'x'
    primary = 1
    defaultExtension = ".xml"
    sample = """<?xml version="1.0" encoding="UTF-8"?>
<!-- This sample XML file shows you ... -->

<Class>
<Order Name="TINAMIFORMES">
        <Family Name="TINAMIDAE">
            <Species attr="value">content.</Species>
            <![CDATA[
                This is a CDATA section
            ]]>
        </Family>
    </Order>
"""
 
