/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Common front for various implementations of OS.File
 */

if (typeof Components != "undefined") {
  this.EXPORTED_SYMBOLS = ["OS"];
  Components.utils.import("resource://gre/modules/osfile/osfile_async_front.jsm", this);
} else {
//@line 16 "/home/komodo-build/mozbuilds/release/edit-8.0/hg-ff-18.0.0/mozilla/toolkit/components/osfile/osfile.jsm"
  importScripts("resource://gre/modules/osfile/osfile_unix_front.jsm");
//@line 18 "/home/komodo-build/mozbuilds/release/edit-8.0/hg-ff-18.0.0/mozilla/toolkit/components/osfile/osfile.jsm"
}