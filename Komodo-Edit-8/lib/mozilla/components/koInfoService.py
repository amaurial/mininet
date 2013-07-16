#!python
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

"""Provide general (read-only) information about a Komodo
build/installation.
"""





import sys
import os
import re
import time
import logging
import operator

from xpcom import components, nsError, ServerException, COMException



log = logging.getLogger("koInfoService")



class KoInfoService(object):
    _com_interfaces_ = [components.interfaces.koIInfoService]
    _reg_clsid_ = "{EB22F329-1D99-427a-B0E1-19DFF13AFBF7}"
    _reg_contractid_ = "@activestate.com/koInfoService;1"
    _reg_desc_ = "Komodo Information Service"

    version = "8.0.1"
    buildNumber = "12353"
    buildASCTime = "Sun Mar 24 04:19:16 2013"
    buildPlatform = "linux-x86_64"
    #TODO: Drop mozBinDir here, only used as a "stamp" (?) in
    #      koFileLoggingService.py. koIDirs has the authoritative mozBinDir.
    mozBinDir = "/home/komodo-build/mozbuilds/release/edit-8.0/hg-ff-18.0.0/mozilla/ko-8.0.x/dist/bin"
    buildType = "release"
    buildFlavour = "full"
    productType = "edit"
    prettyProductType = "Edit"

    def __init__(self):
        self.platform = sys.platform
        
        #TODO: Drop all these. They aren't necessary.
        self.isWindows = sys.platform.startswith("win")
        # XXX bug 33823
        # when building with gtk2, platform.py functions fail preventing
        # komodo startup.  os.uname should work fine on *nix platforms.
        if sys.platform.startswith("win"):
            import platform
            self.osSystem = platform.system()
            self.osRelease = platform.release()
            self.osVersion = platform.version()
        else:
            self.osSystem,node,self.osRelease,self.osVersion,machine = os.uname()
        # We are in non-interactive mode if KOMODO_NONINTERACTIVE is set
        # and non-zero.
        KOMODO_NONINTERACTIVE = os.environ.get("KOMODO_NONINTERACTIVE")
        self.nonInteractiveMode = 0
        if KOMODO_NONINTERACTIVE:
            try:
                KOMODO_NONINTERACTIVE = int(KOMODO_NONINTERACTIVE)
            except ValueError:
                pass
            if KOMODO_NONINTERACTIVE:
                self.nonInteractiveMode = 1

        self._usedWindowNums = set()
        self._nextAvailWindowNum = 1
        
    def nextWindowNum(self):
        loadedWindowNums = []
        prefs = components.classes["@activestate.com/koPrefService;1"].\
                        getService(components.interfaces.koIPrefService).prefs
        if prefs.hasPref("windowWorkspace"):
            windowWorkspacePrefs = prefs.getPref("windowWorkspace")
            # Get only numbered members of the windowWorkspace pref (bug 97717)
            prefIds = [x for x in windowWorkspacePrefs.getPrefIds() if
                       all([y.isdigit() for y in x])]
            for prefId in prefIds:
                try:
                    pref = windowWorkspacePrefs.getPref(prefId)
                    if pref.hasLongPref('windowNum'):
                        try:
                            windowNum = pref.getLongPref('windowNum')
                            loadedWindowNums.append(windowNum)
                        except:
                            log.exception("nextWindowNum: can't get window # for workspace %r",
                                          prefId)
                except:
                    log.exception("nextWindowNum: can't get pref windowWorkspace/%s", prefId)
        retVal = self._nextAvailWindowNum
        if retVal in self._usedWindowNums:
            while True:
                retVal += 1
                if retVal not in self._usedWindowNums:
                    break
                elif retVal not in loadedWindowNums:
                    break
        self._usedWindowNums.add(retVal)
        self._nextAvailWindowNum = retVal + 1
        return retVal
        
    def setUsedWindowNum(self, val):
        if val in self._usedWindowNums:
            raise ServerException(nsError.NS_ERROR_FAILURE,
                                  "setUsedWindowNum: %d already in use" % val)
        self._usedWindowNums.add(val)

if __name__ == "__main__":
    info = components.classes['@activestate.com/koInfoService;1'].\
        getService(components.interfaces.koIInfoService)
    print "platform: %r" % info.platform
    print "osSystem: %r" % info.osSystem
    print "osRelease: %r" % info.osRelease
    print "osVersion: %r" % info.osVersion
    print "version: %r" % info.version
    print "buildNumber: %r" % info.buildNumber
    print "buildASCTime: %r" % info.buildASCTime
    print "buildType: %r" % info.buildType
    print "buildFlavour: %r" % info.buildFlavour
    print "productType: %r" % info.productType
    print "nonInteractiveMode: %r" % info.nonInteractiveMode
