/* Copyright (c) 2009 ActiveState
   See the file LICENSE.txt for licensing information. */

/**
 * This is an XPCOM wrapper the JavaScript (npruntime) scimoz object:
 */

const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

/***********************************************************
 *              XPCOM class definition                     *
 ***********************************************************/

// Class constructor.
function koSciMozWrapper() {
    this.wrappedJSObject = this;
}

// Class definition.
koSciMozWrapper.prototype = {

    // properties required for XPCOM registration:
    classDescription: "XPCOM wrapper around the npruntime scimoz object",

    classID:          Components.ID("{487f68c7-386a-4802-8874-b0f4912e59dc}"),
    contractID:       "@activestate.com/koSciMozWrapper;1",

    _interfaces: [Ci.nsIClassInfo,
                  Ci.ISciMozLite,
                  Ci.ISciMoz,
                  Ci.nsISupportsWeakReference],
    /* see bottom of file for QI impl */

    getInterfaces: function getInterfaces(aCount) {
        aCount.value = this._interfaces.length;
        return Array.slice(this._interfaces);
    },

    getHelperForLanguage: function() null,
    implementationLanguage: Ci.nsIProgrammingLanguage.JAVASCRIPT,
    flags: Ci.nsIClassInfo.MAIN_THREAD_ONLY |
           Ci.nsIClassInfo.EAGER_CLASSINFO,

    __scimoz: null,
};

koSciMozWrapper.prototype._interfaces.push(Components.interfaces.ISciMoz_Part0);
koSciMozWrapper.prototype._interfaces.push(Components.interfaces.ISciMoz_Part1);
koSciMozWrapper.prototype._interfaces.push(Components.interfaces.ISciMoz_Part2);
koSciMozWrapper.prototype._interfaces.push(Components.interfaces.ISciMoz_Part3);
koSciMozWrapper.prototype.__defineGetter__("highlightGuide",
                                           function get_highlightGuide()this.__scimoz.highlightGuide);
koSciMozWrapper.prototype.__defineGetter__("edgeColumn",
                                           function get_edgeColumn()this.__scimoz.edgeColumn);
koSciMozWrapper.prototype.__defineGetter__("twoPhaseDraw",
                                           function get_twoPhaseDraw()this.__scimoz.twoPhaseDraw);
koSciMozWrapper.prototype.__defineGetter__("endStyled",
                                           function get_endStyled()this.__scimoz.endStyled);
koSciMozWrapper.prototype.__defineGetter__("focus",
                                           function get_focus()this.__scimoz.focus);
koSciMozWrapper.prototype.__defineGetter__("allLinesVisible",
                                           function get_allLinesVisible()this.__scimoz.allLinesVisible);
koSciMozWrapper.prototype.__defineGetter__("autoCMaxHeight",
                                           function get_autoCMaxHeight()this.__scimoz.autoCMaxHeight);
koSciMozWrapper.prototype.__defineGetter__("autoCCancelAtStart",
                                           function get_autoCCancelAtStart()this.__scimoz.autoCCancelAtStart);
koSciMozWrapper.prototype.__defineGetter__("rectangularSelectionAnchor",
                                           function get_rectangularSelectionAnchor()this.__scimoz.rectangularSelectionAnchor);
koSciMozWrapper.prototype.__defineGetter__("autoCCurrent",
                                           function get_autoCCurrent()this.__scimoz.autoCCurrent);
koSciMozWrapper.prototype.__defineGetter__("selText",
                                           function get_selText()this.__scimoz.selText);
koSciMozWrapper.prototype.__defineGetter__("indicatorValue",
                                           function get_indicatorValue()this.__scimoz.indicatorValue);
koSciMozWrapper.prototype.__defineGetter__("text",
                                           function get_text()this.__scimoz.text);
koSciMozWrapper.prototype.__defineGetter__("annotationStyleOffset",
                                           function get_annotationStyleOffset()this.__scimoz.annotationStyleOffset);
koSciMozWrapper.prototype.__defineGetter__("bufferedDraw",
                                           function get_bufferedDraw()this.__scimoz.bufferedDraw);
koSciMozWrapper.prototype.__defineGetter__("whitespaceSize",
                                           function get_whitespaceSize()this.__scimoz.whitespaceSize);
koSciMozWrapper.prototype.__defineGetter__("hScrollBar",
                                           function get_hScrollBar()this.__scimoz.hScrollBar);
koSciMozWrapper.prototype.__defineGetter__("readOnly",
                                           function get_readOnly()this.__scimoz.readOnly);
koSciMozWrapper.prototype.__defineGetter__("keysUnicode",
                                           function get_keysUnicode()this.__scimoz.keysUnicode);
koSciMozWrapper.prototype.__defineGetter__("selEOLFilled",
                                           function get_selEOLFilled()this.__scimoz.selEOLFilled);
koSciMozWrapper.prototype.__defineGetter__("caretLineVisibleAlways",
                                           function get_caretLineVisibleAlways()this.__scimoz.caretLineVisibleAlways);
koSciMozWrapper.prototype.__defineGetter__("name",
                                           function get_name()this.__scimoz.name);
koSciMozWrapper.prototype.__defineGetter__("overtype",
                                           function get_overtype()this.__scimoz.overtype);
koSciMozWrapper.prototype.__defineGetter__("lexer",
                                           function get_lexer()this.__scimoz.lexer);
koSciMozWrapper.prototype.__defineGetter__("codePage",
                                           function get_codePage()this.__scimoz.codePage);
koSciMozWrapper.prototype.__defineGetter__("zoom",
                                           function get_zoom()this.__scimoz.zoom);
koSciMozWrapper.prototype.__defineGetter__("selections",
                                           function get_selections()this.__scimoz.selections);
koSciMozWrapper.prototype.__defineGetter__("selectionIsRectangle",
                                           function get_selectionIsRectangle()this.__scimoz.selectionIsRectangle);
koSciMozWrapper.prototype.__defineGetter__("rectangularSelectionAnchorVirtualSpace",
                                           function get_rectangularSelectionAnchorVirtualSpace()this.__scimoz.rectangularSelectionAnchorVirtualSpace);
koSciMozWrapper.prototype.__defineGetter__("indentationGuides",
                                           function get_indentationGuides()this.__scimoz.indentationGuides);
koSciMozWrapper.prototype.__defineGetter__("autoCIgnoreCase",
                                           function get_autoCIgnoreCase()this.__scimoz.autoCIgnoreCase);
koSciMozWrapper.prototype.__defineGetter__("identifier",
                                           function get_identifier()this.__scimoz.identifier);
koSciMozWrapper.prototype.__defineGetter__("useTabs",
                                           function get_useTabs()this.__scimoz.useTabs);
koSciMozWrapper.prototype.__defineGetter__("printColourMode",
                                           function get_printColourMode()this.__scimoz.printColourMode);
koSciMozWrapper.prototype.__defineGetter__("hotspotSingleLine",
                                           function get_hotspotSingleLine()this.__scimoz.hotspotSingleLine);
koSciMozWrapper.prototype.__defineGetter__("vScrollBar",
                                           function get_vScrollBar()this.__scimoz.vScrollBar);
koSciMozWrapper.prototype.__defineGetter__("directFunction",
                                           function get_directFunction()this.__scimoz.directFunction);
koSciMozWrapper.prototype.__defineGetter__("endAtLastLine",
                                           function get_endAtLastLine()this.__scimoz.endAtLastLine);
koSciMozWrapper.prototype.__defineGetter__("mainSelection",
                                           function get_mainSelection()this.__scimoz.mainSelection);
koSciMozWrapper.prototype.__defineGetter__("selectionStart",
                                           function get_selectionStart()this.__scimoz.selectionStart);
koSciMozWrapper.prototype.__defineGetter__("wrapStartIndent",
                                           function get_wrapStartIndent()this.__scimoz.wrapStartIndent);
koSciMozWrapper.prototype.__defineGetter__("directPointer",
                                           function get_directPointer()this.__scimoz.directPointer);
koSciMozWrapper.prototype.__defineGetter__("undoCollection",
                                           function get_undoCollection()this.__scimoz.undoCollection);
koSciMozWrapper.prototype.__defineGetter__("viewEOL",
                                           function get_viewEOL()this.__scimoz.viewEOL);
koSciMozWrapper.prototype.__defineGetter__("edgeColour",
                                           function get_edgeColour()this.__scimoz.edgeColour);
koSciMozWrapper.prototype.__defineGetter__("wrapVisualFlags",
                                           function get_wrapVisualFlags()this.__scimoz.wrapVisualFlags);
koSciMozWrapper.prototype.__defineGetter__("eOLMode",
                                           function get_eOLMode()this.__scimoz.eOLMode);
koSciMozWrapper.prototype.__defineGetter__("autoCSeparator",
                                           function get_autoCSeparator()this.__scimoz.autoCSeparator);
koSciMozWrapper.prototype.__defineGetter__("caretPeriod",
                                           function get_caretPeriod()this.__scimoz.caretPeriod);
koSciMozWrapper.prototype.__defineGetter__("characterPointer",
                                           function get_characterPointer()this.__scimoz.characterPointer);
koSciMozWrapper.prototype.__defineGetter__("marginStyleOffset",
                                           function get_marginStyleOffset()this.__scimoz.marginStyleOffset);
koSciMozWrapper.prototype.__defineGetter__("modify",
                                           function get_modify()this.__scimoz.modify);
koSciMozWrapper.prototype.__defineGetter__("multiPaste",
                                           function get_multiPaste()this.__scimoz.multiPaste);
koSciMozWrapper.prototype.__defineGetter__("targetEnd",
                                           function get_targetEnd()this.__scimoz.targetEnd);
koSciMozWrapper.prototype.__defineGetter__("modEventMask",
                                           function get_modEventMask()this.__scimoz.modEventMask);
koSciMozWrapper.prototype.__defineGetter__("additionalCaretFore",
                                           function get_additionalCaretFore()this.__scimoz.additionalCaretFore);
koSciMozWrapper.prototype.__defineGetter__("autoCDropRestOfWord",
                                           function get_autoCDropRestOfWord()this.__scimoz.autoCDropRestOfWord);
koSciMozWrapper.prototype.__defineGetter__("searchFlags",
                                           function get_searchFlags()this.__scimoz.searchFlags);
koSciMozWrapper.prototype.__defineGetter__("positionCache",
                                           function get_positionCache()this.__scimoz.positionCache);
koSciMozWrapper.prototype.__defineGetter__("caretWidth",
                                           function get_caretWidth()this.__scimoz.caretWidth);
koSciMozWrapper.prototype.__defineGetter__("indent",
                                           function get_indent()this.__scimoz.indent);
koSciMozWrapper.prototype.__defineGetter__("additionalSelAlpha",
                                           function get_additionalSelAlpha()this.__scimoz.additionalSelAlpha);
koSciMozWrapper.prototype.__defineGetter__("gapPosition",
                                           function get_gapPosition()this.__scimoz.gapPosition);
koSciMozWrapper.prototype.__defineGetter__("textLength",
                                           function get_textLength()this.__scimoz.textLength);
koSciMozWrapper.prototype.__defineGetter__("currentPos",
                                           function get_currentPos()this.__scimoz.currentPos);
koSciMozWrapper.prototype.__defineGetter__("autoCTypeSeparator",
                                           function get_autoCTypeSeparator()this.__scimoz.autoCTypeSeparator);
koSciMozWrapper.prototype.__defineGetter__("selAlpha",
                                           function get_selAlpha()this.__scimoz.selAlpha);
koSciMozWrapper.prototype.__defineGetter__("length",
                                           function get_length()this.__scimoz.length);
koSciMozWrapper.prototype.__defineGetter__("caretLineBack",
                                           function get_caretLineBack()this.__scimoz.caretLineBack);
koSciMozWrapper.prototype.__defineGetter__("rectangularSelectionCaret",
                                           function get_rectangularSelectionCaret()this.__scimoz.rectangularSelectionCaret);
koSciMozWrapper.prototype.__defineGetter__("isOwned",
                                           function get_isOwned()this.__scimoz.isOwned);
koSciMozWrapper.prototype.__defineGetter__("visible",
                                           function get_visible()this.__scimoz.visible);
koSciMozWrapper.prototype.__defineGetter__("lineCount",
                                           function get_lineCount()this.__scimoz.lineCount);
koSciMozWrapper.prototype.__defineGetter__("selectionEnd",
                                           function get_selectionEnd()this.__scimoz.selectionEnd);
koSciMozWrapper.prototype.__defineGetter__("multipleSelection",
                                           function get_multipleSelection()this.__scimoz.multipleSelection);
koSciMozWrapper.prototype.__defineGetter__("tabIndents",
                                           function get_tabIndents()this.__scimoz.tabIndents);
koSciMozWrapper.prototype.__defineGetter__("scrollWidth",
                                           function get_scrollWidth()this.__scimoz.scrollWidth);
koSciMozWrapper.prototype.__defineGetter__("wrapVisualFlagsLocation",
                                           function get_wrapVisualFlagsLocation()this.__scimoz.wrapVisualFlagsLocation);
koSciMozWrapper.prototype.__defineGetter__("printWrapMode",
                                           function get_printWrapMode()this.__scimoz.printWrapMode);
koSciMozWrapper.prototype.__defineGetter__("indicatorCurrent",
                                           function get_indicatorCurrent()this.__scimoz.indicatorCurrent);
koSciMozWrapper.prototype.__defineGetter__("additionalCaretsVisible",
                                           function get_additionalCaretsVisible()this.__scimoz.additionalCaretsVisible);
koSciMozWrapper.prototype.__defineGetter__("fontQuality",
                                           function get_fontQuality()this.__scimoz.fontQuality);
koSciMozWrapper.prototype.__defineGetter__("printMagnification",
                                           function get_printMagnification()this.__scimoz.printMagnification);
koSciMozWrapper.prototype.__defineGetter__("wrapMode",
                                           function get_wrapMode()this.__scimoz.wrapMode);
koSciMozWrapper.prototype.__defineGetter__("isTracking",
                                           function get_isTracking()this.__scimoz.isTracking);
koSciMozWrapper.prototype.__defineGetter__("extraAscent",
                                           function get_extraAscent()this.__scimoz.extraAscent);
koSciMozWrapper.prototype.__defineGetter__("scrollWidthTracking",
                                           function get_scrollWidthTracking()this.__scimoz.scrollWidthTracking);
koSciMozWrapper.prototype.__defineGetter__("targetStart",
                                           function get_targetStart()this.__scimoz.targetStart);
koSciMozWrapper.prototype.__defineGetter__("dragPosition",
                                           function get_dragPosition()this.__scimoz.dragPosition);
koSciMozWrapper.prototype.__defineGetter__("wordChars",
                                           function get_wordChars()this.__scimoz.wordChars);
koSciMozWrapper.prototype.__defineGetter__("layoutCache",
                                           function get_layoutCache()this.__scimoz.layoutCache);
koSciMozWrapper.prototype.__defineGetter__("rectangularSelectionModifier",
                                           function get_rectangularSelectionModifier()this.__scimoz.rectangularSelectionModifier);
koSciMozWrapper.prototype.__defineGetter__("controlCharSymbol",
                                           function get_controlCharSymbol()this.__scimoz.controlCharSymbol);
koSciMozWrapper.prototype.__defineGetter__("styleBitsNeeded",
                                           function get_styleBitsNeeded()this.__scimoz.styleBitsNeeded);
koSciMozWrapper.prototype.__defineGetter__("usePalette",
                                           function get_usePalette()this.__scimoz.usePalette);
koSciMozWrapper.prototype.__defineGetter__("selectionMode",
                                           function get_selectionMode()this.__scimoz.selectionMode);
koSciMozWrapper.prototype.__defineGetter__("marginOptions",
                                           function get_marginOptions()this.__scimoz.marginOptions);
koSciMozWrapper.prototype.__defineGetter__("autoCMaxWidth",
                                           function get_autoCMaxWidth()this.__scimoz.autoCMaxWidth);
koSciMozWrapper.prototype.__defineGetter__("mouseDwellTime",
                                           function get_mouseDwellTime()this.__scimoz.mouseDwellTime);
koSciMozWrapper.prototype.__defineGetter__("inDragSession",
                                           function get_inDragSession()this.__scimoz.inDragSession);
koSciMozWrapper.prototype.__defineGetter__("autoCCaseInsensitiveBehaviour",
                                           function get_autoCCaseInsensitiveBehaviour()this.__scimoz.autoCCaseInsensitiveBehaviour);
koSciMozWrapper.prototype.__defineGetter__("viewWS",
                                           function get_viewWS()this.__scimoz.viewWS);
koSciMozWrapper.prototype.__defineGetter__("backSpaceUnIndents",
                                           function get_backSpaceUnIndents()this.__scimoz.backSpaceUnIndents);
koSciMozWrapper.prototype.__defineGetter__("cursor",
                                           function get_cursor()this.__scimoz.cursor);
koSciMozWrapper.prototype.__defineGetter__("tabWidth",
                                           function get_tabWidth()this.__scimoz.tabWidth);
koSciMozWrapper.prototype.__defineGetter__("anchor",
                                           function get_anchor()this.__scimoz.anchor);
koSciMozWrapper.prototype.__defineGetter__("xOffset",
                                           function get_xOffset()this.__scimoz.xOffset);
koSciMozWrapper.prototype.__defineGetter__("additionalCaretsBlink",
                                           function get_additionalCaretsBlink()this.__scimoz.additionalCaretsBlink);
koSciMozWrapper.prototype.__defineGetter__("additionalSelectionTyping",
                                           function get_additionalSelectionTyping()this.__scimoz.additionalSelectionTyping);
koSciMozWrapper.prototype.__defineGetter__("caretFore",
                                           function get_caretFore()this.__scimoz.caretFore);
koSciMozWrapper.prototype.__defineGetter__("annotationVisible",
                                           function get_annotationVisible()this.__scimoz.annotationVisible);
koSciMozWrapper.prototype.__defineGetter__("wrapIndentMode",
                                           function get_wrapIndentMode()this.__scimoz.wrapIndentMode);
koSciMozWrapper.prototype.__defineGetter__("autoCAutoHide",
                                           function get_autoCAutoHide()this.__scimoz.autoCAutoHide);
koSciMozWrapper.prototype.__defineGetter__("selectionEmpty",
                                           function get_selectionEmpty()this.__scimoz.selectionEmpty);
koSciMozWrapper.prototype.__defineGetter__("marginRight",
                                           function get_marginRight()this.__scimoz.marginRight);
koSciMozWrapper.prototype.__defineGetter__("technology",
                                           function get_technology()this.__scimoz.technology);
koSciMozWrapper.prototype.__defineGetter__("extraDescent",
                                           function get_extraDescent()this.__scimoz.extraDescent);
koSciMozWrapper.prototype.__defineGetter__("caretLineVisible",
                                           function get_caretLineVisible()this.__scimoz.caretLineVisible);
koSciMozWrapper.prototype.__defineGetter__("isFocused",
                                           function get_isFocused()this.__scimoz.isFocused);
koSciMozWrapper.prototype.__defineGetter__("firstVisibleLine",
                                           function get_firstVisibleLine()this.__scimoz.firstVisibleLine);
koSciMozWrapper.prototype.__defineGetter__("virtualSpaceOptions",
                                           function get_virtualSpaceOptions()this.__scimoz.virtualSpaceOptions);
koSciMozWrapper.prototype.__defineGetter__("marginLeft",
                                           function get_marginLeft()this.__scimoz.marginLeft);
koSciMozWrapper.prototype.__defineGetter__("autoCChooseSingle",
                                           function get_autoCChooseSingle()this.__scimoz.autoCChooseSingle);
koSciMozWrapper.prototype.__defineGetter__("rectangularSelectionCaretVirtualSpace",
                                           function get_rectangularSelectionCaretVirtualSpace()this.__scimoz.rectangularSelectionCaretVirtualSpace);
koSciMozWrapper.prototype.__defineGetter__("status",
                                           function get_status()this.__scimoz.status);
koSciMozWrapper.prototype.__defineGetter__("styleBits",
                                           function get_styleBits()this.__scimoz.styleBits);
koSciMozWrapper.prototype.__defineGetter__("edgeMode",
                                           function get_edgeMode()this.__scimoz.edgeMode);
koSciMozWrapper.prototype.__defineGetter__("docPointer",
                                           function get_docPointer()this.__scimoz.docPointer);
koSciMozWrapper.prototype.__defineGetter__("caretSticky",
                                           function get_caretSticky()this.__scimoz.caretSticky);
koSciMozWrapper.prototype.__defineGetter__("maxLineState",
                                           function get_maxLineState()this.__scimoz.maxLineState);
koSciMozWrapper.prototype.__defineGetter__("caretLineBackAlpha",
                                           function get_caretLineBackAlpha()this.__scimoz.caretLineBackAlpha);
koSciMozWrapper.prototype.__defineGetter__("linesOnScreen",
                                           function get_linesOnScreen()this.__scimoz.linesOnScreen);
koSciMozWrapper.prototype.__defineGetter__("pasteConvertEndings",
                                           function get_pasteConvertEndings()this.__scimoz.pasteConvertEndings);
koSciMozWrapper.prototype.__defineGetter__("rejectSelectionClaim",
                                           function get_rejectSelectionClaim()this.__scimoz.rejectSelectionClaim);
koSciMozWrapper.prototype.__defineGetter__("caretStyle",
                                           function get_caretStyle()this.__scimoz.caretStyle);
koSciMozWrapper.prototype.__defineGetter__("mouseDownCaptures",
                                           function get_mouseDownCaptures()this.__scimoz.mouseDownCaptures);
koSciMozWrapper.prototype.__defineSetter__("highlightGuide",
                                           function set_highlightGuide(v)this.__scimoz.highlightGuide=v);
koSciMozWrapper.prototype.__defineSetter__("edgeColumn",
                                           function set_edgeColumn(v)this.__scimoz.edgeColumn=v);
koSciMozWrapper.prototype.__defineSetter__("twoPhaseDraw",
                                           function set_twoPhaseDraw(v)this.__scimoz.twoPhaseDraw=v);
koSciMozWrapper.prototype.__defineSetter__("focus",
                                           function set_focus(v)this.__scimoz.focus=v);
koSciMozWrapper.prototype.__defineSetter__("autoCMaxHeight",
                                           function set_autoCMaxHeight(v)this.__scimoz.autoCMaxHeight=v);
koSciMozWrapper.prototype.__defineSetter__("autoCCancelAtStart",
                                           function set_autoCCancelAtStart(v)this.__scimoz.autoCCancelAtStart=v);
koSciMozWrapper.prototype.__defineSetter__("rectangularSelectionAnchor",
                                           function set_rectangularSelectionAnchor(v)this.__scimoz.rectangularSelectionAnchor=v);
koSciMozWrapper.prototype.__defineSetter__("multipleSelection",
                                           function set_multipleSelection(v)this.__scimoz.multipleSelection=v);
koSciMozWrapper.prototype.__defineSetter__("indicatorValue",
                                           function set_indicatorValue(v)this.__scimoz.indicatorValue=v);
koSciMozWrapper.prototype.__defineSetter__("text",
                                           function set_text(v)this.__scimoz.text=v);
koSciMozWrapper.prototype.__defineSetter__("annotationStyleOffset",
                                           function set_annotationStyleOffset(v)this.__scimoz.annotationStyleOffset=v);
koSciMozWrapper.prototype.__defineSetter__("bufferedDraw",
                                           function set_bufferedDraw(v)this.__scimoz.bufferedDraw=v);
koSciMozWrapper.prototype.__defineSetter__("whitespaceSize",
                                           function set_whitespaceSize(v)this.__scimoz.whitespaceSize=v);
koSciMozWrapper.prototype.__defineSetter__("hScrollBar",
                                           function set_hScrollBar(v)this.__scimoz.hScrollBar=v);
koSciMozWrapper.prototype.__defineSetter__("readOnly",
                                           function set_readOnly(v)this.__scimoz.readOnly=v);
koSciMozWrapper.prototype.__defineSetter__("keysUnicode",
                                           function set_keysUnicode(v)this.__scimoz.keysUnicode=v);
koSciMozWrapper.prototype.__defineSetter__("selEOLFilled",
                                           function set_selEOLFilled(v)this.__scimoz.selEOLFilled=v);
koSciMozWrapper.prototype.__defineSetter__("caretLineVisibleAlways",
                                           function set_caretLineVisibleAlways(v)this.__scimoz.caretLineVisibleAlways=v);
koSciMozWrapper.prototype.__defineSetter__("name",
                                           function set_name(v)this.__scimoz.name=v);
koSciMozWrapper.prototype.__defineSetter__("overtype",
                                           function set_overtype(v)this.__scimoz.overtype=v);
koSciMozWrapper.prototype.__defineSetter__("lexer",
                                           function set_lexer(v)this.__scimoz.lexer=v);
koSciMozWrapper.prototype.__defineSetter__("codePage",
                                           function set_codePage(v)this.__scimoz.codePage=v);
koSciMozWrapper.prototype.__defineSetter__("zoom",
                                           function set_zoom(v)this.__scimoz.zoom=v);
koSciMozWrapper.prototype.__defineSetter__("rectangularSelectionAnchorVirtualSpace",
                                           function set_rectangularSelectionAnchorVirtualSpace(v)this.__scimoz.rectangularSelectionAnchorVirtualSpace=v);
koSciMozWrapper.prototype.__defineSetter__("indentationGuides",
                                           function set_indentationGuides(v)this.__scimoz.indentationGuides=v);
koSciMozWrapper.prototype.__defineSetter__("identifier",
                                           function set_identifier(v)this.__scimoz.identifier=v);
koSciMozWrapper.prototype.__defineSetter__("useTabs",
                                           function set_useTabs(v)this.__scimoz.useTabs=v);
koSciMozWrapper.prototype.__defineSetter__("printColourMode",
                                           function set_printColourMode(v)this.__scimoz.printColourMode=v);
koSciMozWrapper.prototype.__defineSetter__("hotspotSingleLine",
                                           function set_hotspotSingleLine(v)this.__scimoz.hotspotSingleLine=v);
koSciMozWrapper.prototype.__defineSetter__("vScrollBar",
                                           function set_vScrollBar(v)this.__scimoz.vScrollBar=v);
koSciMozWrapper.prototype.__defineSetter__("autoCIgnoreCase",
                                           function set_autoCIgnoreCase(v)this.__scimoz.autoCIgnoreCase=v);
koSciMozWrapper.prototype.__defineSetter__("endAtLastLine",
                                           function set_endAtLastLine(v)this.__scimoz.endAtLastLine=v);
koSciMozWrapper.prototype.__defineSetter__("mainSelection",
                                           function set_mainSelection(v)this.__scimoz.mainSelection=v);
koSciMozWrapper.prototype.__defineSetter__("selectionStart",
                                           function set_selectionStart(v)this.__scimoz.selectionStart=v);
koSciMozWrapper.prototype.__defineSetter__("wrapStartIndent",
                                           function set_wrapStartIndent(v)this.__scimoz.wrapStartIndent=v);
koSciMozWrapper.prototype.__defineSetter__("undoCollection",
                                           function set_undoCollection(v)this.__scimoz.undoCollection=v);
koSciMozWrapper.prototype.__defineSetter__("viewEOL",
                                           function set_viewEOL(v)this.__scimoz.viewEOL=v);
koSciMozWrapper.prototype.__defineSetter__("edgeColour",
                                           function set_edgeColour(v)this.__scimoz.edgeColour=v);
koSciMozWrapper.prototype.__defineSetter__("wrapVisualFlags",
                                           function set_wrapVisualFlags(v)this.__scimoz.wrapVisualFlags=v);
koSciMozWrapper.prototype.__defineSetter__("styleBits",
                                           function set_styleBits(v)this.__scimoz.styleBits=v);
koSciMozWrapper.prototype.__defineSetter__("autoCSeparator",
                                           function set_autoCSeparator(v)this.__scimoz.autoCSeparator=v);
koSciMozWrapper.prototype.__defineSetter__("caretPeriod",
                                           function set_caretPeriod(v)this.__scimoz.caretPeriod=v);
koSciMozWrapper.prototype.__defineSetter__("marginStyleOffset",
                                           function set_marginStyleOffset(v)this.__scimoz.marginStyleOffset=v);
koSciMozWrapper.prototype.__defineSetter__("multiPaste",
                                           function set_multiPaste(v)this.__scimoz.multiPaste=v);
koSciMozWrapper.prototype.__defineSetter__("targetEnd",
                                           function set_targetEnd(v)this.__scimoz.targetEnd=v);
koSciMozWrapper.prototype.__defineSetter__("modEventMask",
                                           function set_modEventMask(v)this.__scimoz.modEventMask=v);
koSciMozWrapper.prototype.__defineSetter__("additionalCaretFore",
                                           function set_additionalCaretFore(v)this.__scimoz.additionalCaretFore=v);
koSciMozWrapper.prototype.__defineSetter__("autoCDropRestOfWord",
                                           function set_autoCDropRestOfWord(v)this.__scimoz.autoCDropRestOfWord=v);
koSciMozWrapper.prototype.__defineSetter__("searchFlags",
                                           function set_searchFlags(v)this.__scimoz.searchFlags=v);
koSciMozWrapper.prototype.__defineSetter__("positionCache",
                                           function set_positionCache(v)this.__scimoz.positionCache=v);
koSciMozWrapper.prototype.__defineSetter__("caretWidth",
                                           function set_caretWidth(v)this.__scimoz.caretWidth=v);
koSciMozWrapper.prototype.__defineSetter__("indent",
                                           function set_indent(v)this.__scimoz.indent=v);
koSciMozWrapper.prototype.__defineSetter__("additionalSelAlpha",
                                           function set_additionalSelAlpha(v)this.__scimoz.additionalSelAlpha=v);
koSciMozWrapper.prototype.__defineSetter__("viewWS",
                                           function set_viewWS(v)this.__scimoz.viewWS=v);
koSciMozWrapper.prototype.__defineSetter__("currentPos",
                                           function set_currentPos(v)this.__scimoz.currentPos=v);
koSciMozWrapper.prototype.__defineSetter__("autoCTypeSeparator",
                                           function set_autoCTypeSeparator(v)this.__scimoz.autoCTypeSeparator=v);
koSciMozWrapper.prototype.__defineSetter__("selAlpha",
                                           function set_selAlpha(v)this.__scimoz.selAlpha=v);
koSciMozWrapper.prototype.__defineSetter__("isFocused",
                                           function set_isFocused(v)this.__scimoz.isFocused=v);
koSciMozWrapper.prototype.__defineSetter__("caretLineBack",
                                           function set_caretLineBack(v)this.__scimoz.caretLineBack=v);
koSciMozWrapper.prototype.__defineSetter__("rectangularSelectionCaret",
                                           function set_rectangularSelectionCaret(v)this.__scimoz.rectangularSelectionCaret=v);
koSciMozWrapper.prototype.__defineSetter__("visible",
                                           function set_visible(v)this.__scimoz.visible=v);
koSciMozWrapper.prototype.__defineSetter__("selectionEnd",
                                           function set_selectionEnd(v)this.__scimoz.selectionEnd=v);
koSciMozWrapper.prototype.__defineSetter__("tabIndents",
                                           function set_tabIndents(v)this.__scimoz.tabIndents=v);
koSciMozWrapper.prototype.__defineSetter__("scrollWidth",
                                           function set_scrollWidth(v)this.__scimoz.scrollWidth=v);
koSciMozWrapper.prototype.__defineSetter__("wrapVisualFlagsLocation",
                                           function set_wrapVisualFlagsLocation(v)this.__scimoz.wrapVisualFlagsLocation=v);
koSciMozWrapper.prototype.__defineSetter__("printWrapMode",
                                           function set_printWrapMode(v)this.__scimoz.printWrapMode=v);
koSciMozWrapper.prototype.__defineSetter__("indicatorCurrent",
                                           function set_indicatorCurrent(v)this.__scimoz.indicatorCurrent=v);
koSciMozWrapper.prototype.__defineSetter__("additionalCaretsVisible",
                                           function set_additionalCaretsVisible(v)this.__scimoz.additionalCaretsVisible=v);
koSciMozWrapper.prototype.__defineSetter__("fontQuality",
                                           function set_fontQuality(v)this.__scimoz.fontQuality=v);
koSciMozWrapper.prototype.__defineSetter__("printMagnification",
                                           function set_printMagnification(v)this.__scimoz.printMagnification=v);
koSciMozWrapper.prototype.__defineSetter__("wrapMode",
                                           function set_wrapMode(v)this.__scimoz.wrapMode=v);
koSciMozWrapper.prototype.__defineSetter__("extraAscent",
                                           function set_extraAscent(v)this.__scimoz.extraAscent=v);
koSciMozWrapper.prototype.__defineSetter__("scrollWidthTracking",
                                           function set_scrollWidthTracking(v)this.__scimoz.scrollWidthTracking=v);
koSciMozWrapper.prototype.__defineSetter__("targetStart",
                                           function set_targetStart(v)this.__scimoz.targetStart=v);
koSciMozWrapper.prototype.__defineSetter__("dragPosition",
                                           function set_dragPosition(v)this.__scimoz.dragPosition=v);
koSciMozWrapper.prototype.__defineSetter__("wordChars",
                                           function set_wordChars(v)this.__scimoz.wordChars=v);
koSciMozWrapper.prototype.__defineSetter__("layoutCache",
                                           function set_layoutCache(v)this.__scimoz.layoutCache=v);
koSciMozWrapper.prototype.__defineSetter__("rectangularSelectionModifier",
                                           function set_rectangularSelectionModifier(v)this.__scimoz.rectangularSelectionModifier=v);
koSciMozWrapper.prototype.__defineSetter__("controlCharSymbol",
                                           function set_controlCharSymbol(v)this.__scimoz.controlCharSymbol=v);
koSciMozWrapper.prototype.__defineSetter__("usePalette",
                                           function set_usePalette(v)this.__scimoz.usePalette=v);
koSciMozWrapper.prototype.__defineSetter__("selectionMode",
                                           function set_selectionMode(v)this.__scimoz.selectionMode=v);
koSciMozWrapper.prototype.__defineSetter__("marginOptions",
                                           function set_marginOptions(v)this.__scimoz.marginOptions=v);
koSciMozWrapper.prototype.__defineSetter__("autoCMaxWidth",
                                           function set_autoCMaxWidth(v)this.__scimoz.autoCMaxWidth=v);
koSciMozWrapper.prototype.__defineSetter__("mouseDwellTime",
                                           function set_mouseDwellTime(v)this.__scimoz.mouseDwellTime=v);
koSciMozWrapper.prototype.__defineSetter__("autoCCaseInsensitiveBehaviour",
                                           function set_autoCCaseInsensitiveBehaviour(v)this.__scimoz.autoCCaseInsensitiveBehaviour=v);
koSciMozWrapper.prototype.__defineSetter__("backSpaceUnIndents",
                                           function set_backSpaceUnIndents(v)this.__scimoz.backSpaceUnIndents=v);
koSciMozWrapper.prototype.__defineSetter__("cursor",
                                           function set_cursor(v)this.__scimoz.cursor=v);
koSciMozWrapper.prototype.__defineSetter__("tabWidth",
                                           function set_tabWidth(v)this.__scimoz.tabWidth=v);
koSciMozWrapper.prototype.__defineSetter__("anchor",
                                           function set_anchor(v)this.__scimoz.anchor=v);
koSciMozWrapper.prototype.__defineSetter__("xOffset",
                                           function set_xOffset(v)this.__scimoz.xOffset=v);
koSciMozWrapper.prototype.__defineSetter__("additionalCaretsBlink",
                                           function set_additionalCaretsBlink(v)this.__scimoz.additionalCaretsBlink=v);
koSciMozWrapper.prototype.__defineSetter__("additionalSelectionTyping",
                                           function set_additionalSelectionTyping(v)this.__scimoz.additionalSelectionTyping=v);
koSciMozWrapper.prototype.__defineSetter__("caretFore",
                                           function set_caretFore(v)this.__scimoz.caretFore=v);
koSciMozWrapper.prototype.__defineSetter__("annotationVisible",
                                           function set_annotationVisible(v)this.__scimoz.annotationVisible=v);
koSciMozWrapper.prototype.__defineSetter__("wrapIndentMode",
                                           function set_wrapIndentMode(v)this.__scimoz.wrapIndentMode=v);
koSciMozWrapper.prototype.__defineSetter__("autoCAutoHide",
                                           function set_autoCAutoHide(v)this.__scimoz.autoCAutoHide=v);
koSciMozWrapper.prototype.__defineSetter__("marginRight",
                                           function set_marginRight(v)this.__scimoz.marginRight=v);
koSciMozWrapper.prototype.__defineSetter__("technology",
                                           function set_technology(v)this.__scimoz.technology=v);
koSciMozWrapper.prototype.__defineSetter__("extraDescent",
                                           function set_extraDescent(v)this.__scimoz.extraDescent=v);
koSciMozWrapper.prototype.__defineSetter__("caretLineVisible",
                                           function set_caretLineVisible(v)this.__scimoz.caretLineVisible=v);
koSciMozWrapper.prototype.__defineSetter__("firstVisibleLine",
                                           function set_firstVisibleLine(v)this.__scimoz.firstVisibleLine=v);
koSciMozWrapper.prototype.__defineSetter__("virtualSpaceOptions",
                                           function set_virtualSpaceOptions(v)this.__scimoz.virtualSpaceOptions=v);
koSciMozWrapper.prototype.__defineSetter__("marginLeft",
                                           function set_marginLeft(v)this.__scimoz.marginLeft=v);
koSciMozWrapper.prototype.__defineSetter__("autoCChooseSingle",
                                           function set_autoCChooseSingle(v)this.__scimoz.autoCChooseSingle=v);
koSciMozWrapper.prototype.__defineSetter__("rectangularSelectionCaretVirtualSpace",
                                           function set_rectangularSelectionCaretVirtualSpace(v)this.__scimoz.rectangularSelectionCaretVirtualSpace=v);
koSciMozWrapper.prototype.__defineSetter__("status",
                                           function set_status(v)this.__scimoz.status=v);
koSciMozWrapper.prototype.__defineSetter__("eOLMode",
                                           function set_eOLMode(v)this.__scimoz.eOLMode=v);
koSciMozWrapper.prototype.__defineSetter__("edgeMode",
                                           function set_edgeMode(v)this.__scimoz.edgeMode=v);
koSciMozWrapper.prototype.__defineSetter__("docPointer",
                                           function set_docPointer(v)this.__scimoz.docPointer=v);
koSciMozWrapper.prototype.__defineSetter__("caretSticky",
                                           function set_caretSticky(v)this.__scimoz.caretSticky=v);
koSciMozWrapper.prototype.__defineSetter__("caretLineBackAlpha",
                                           function set_caretLineBackAlpha(v)this.__scimoz.caretLineBackAlpha=v);
koSciMozWrapper.prototype.__defineSetter__("pasteConvertEndings",
                                           function set_pasteConvertEndings(v)this.__scimoz.pasteConvertEndings=v);
koSciMozWrapper.prototype.__defineSetter__("rejectSelectionClaim",
                                           function set_rejectSelectionClaim(v)this.__scimoz.rejectSelectionClaim=v);
koSciMozWrapper.prototype.__defineSetter__("caretStyle",
                                           function set_caretStyle(v)this.__scimoz.caretStyle=v);
koSciMozWrapper.prototype.__defineSetter__("mouseDownCaptures",
                                           function set_mouseDownCaptures(v)this.__scimoz.mouseDownCaptures=v);
koSciMozWrapper.prototype.vCHomeWrapExtend =
    function meth_vCHomeWrapExtend() this.__scimoz.vCHomeWrapExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setMarginMaskN =
    function meth_setMarginMaskN() this.__scimoz.setMarginMaskN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.homeWrapExtend =
    function meth_homeWrapExtend() this.__scimoz.homeWrapExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.marginSetStyles =
    function meth_marginSetStyles() this.__scimoz.marginSetStyles.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelectionNEnd =
    function meth_setSelectionNEnd() this.__scimoz.setSelectionNEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLineState =
    function meth_getLineState() this.__scimoz.getLineState.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetWeight =
    function meth_styleGetWeight() this.__scimoz.styleGetWeight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.toggleCaretSticky =
    function meth_toggleCaretSticky() this.__scimoz.toggleCaretSticky.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setAdditionalSelFore =
    function meth_setAdditionalSelFore() this.__scimoz.setAdditionalSelFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipSetBack =
    function meth_callTipSetBack() this.__scimoz.callTipSetBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.positionAfter =
    function meth_positionAfter() this.__scimoz.positionAfter.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.stopRecord =
    function meth_stopRecord() this.__scimoz.stopRecord.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetBold =
    function meth_styleGetBold() this.__scimoz.styleGetBold.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.buttonMove =
    function meth_buttonMove() this.__scimoz.buttonMove.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setMarginCursorN =
    function meth_setMarginCursorN() this.__scimoz.setMarginCursorN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getTag =
    function meth_getTag() this.__scimoz.getTag.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getSelectionNCaret =
    function meth_getSelectionNCaret() this.__scimoz.getSelectionNCaret.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.moveSelectedLinesUp =
    function meth_moveSelectedLinesUp() this.__scimoz.moveSelectedLinesUp.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.rotateSelection =
    function meth_rotateSelection() this.__scimoz.rotateSelection.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicatorValueAt =
    function meth_indicatorValueAt() this.__scimoz.indicatorValueAt.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicatorStart =
    function meth_indicatorStart() this.__scimoz.indicatorStart.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.findIndicatorHide =
    function meth_findIndicatorHide() this.__scimoz.findIndicatorHide.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setFoldMarginHiColour =
    function meth_setFoldMarginHiColour() this.__scimoz.setFoldMarginHiColour.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordStartPosition =
    function meth_wordStartPosition() this.__scimoz.wordStartPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.annotationGetLines =
    function meth_annotationGetLines() this.__scimoz.annotationGetLines.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.copyRange =
    function meth_copyRange() this.__scimoz.copyRange.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.buttonDown =
    function meth_buttonDown() this.__scimoz.buttonDown.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.findColumn =
    function meth_findColumn() this.__scimoz.findColumn.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetEOLFilled =
    function meth_styleSetEOLFilled() this.__scimoz.styleSetEOLFilled.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.showLines =
    function meth_showLines() this.__scimoz.showLines.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.textWidth =
    function meth_textWidth() this.__scimoz.textWidth.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetWeight =
    function meth_styleSetWeight() this.__scimoz.styleSetWeight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.clearSelections =
    function meth_clearSelections() this.__scimoz.clearSelections.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerSetBackSelected =
    function meth_markerSetBackSelected() this.__scimoz.markerSetBackSelected.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCSetFillUps =
    function meth_autoCSetFillUps() this.__scimoz.autoCSetFillUps.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.releaseMouseCapture =
    function meth_releaseMouseCapture() this.__scimoz.releaseMouseCapture.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.deleteRange =
    function meth_deleteRange() this.__scimoz.deleteRange.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.describeKeyWordSets =
    function meth_describeKeyWordSets() this.__scimoz.describeKeyWordSets.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.positionFromPointClose =
    function meth_positionFromPointClose() this.__scimoz.positionFromPointClose.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.braceBadLightIndicator =
    function meth_braceBadLightIndicator() this.__scimoz.braceBadLightIndicator.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.convertEOLs =
    function meth_convertEOLs() this.__scimoz.convertEOLs.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.upperCase =
    function meth_upperCase() this.__scimoz.upperCase.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordPartLeft =
    function meth_wordPartLeft() this.__scimoz.wordPartLeft.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getHotspotActiveBack =
    function meth_getHotspotActiveBack() this.__scimoz.getHotspotActiveBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.formFeed =
    function meth_formFeed() this.__scimoz.formFeed.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetCharacterSet =
    function meth_styleGetCharacterSet() this.__scimoz.styleGetCharacterSet.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerDefine =
    function meth_markerDefine() this.__scimoz.markerDefine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.selectAll =
    function meth_selectAll() this.__scimoz.selectAll.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.visibleFromDocLine =
    function meth_visibleFromDocLine() this.__scimoz.visibleFromDocLine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.braceHighlightIndicator =
    function meth_braceHighlightIndicator() this.__scimoz.braceHighlightIndicator.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetFore =
    function meth_styleGetFore() this.__scimoz.styleGetFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.propertyNames =
    function meth_propertyNames() this.__scimoz.propertyNames.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLineIndentPosition =
    function meth_getLineIndentPosition() this.__scimoz.getLineIndentPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.usePopUp =
    function meth_usePopUp() this.__scimoz.usePopUp.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLineSelStartPosition =
    function meth_getLineSelStartPosition() this.__scimoz.getLineSelStartPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicSetUnder =
    function meth_indicSetUnder() this.__scimoz.indicSetUnder.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelectionNCaretVirtualSpace =
    function meth_setSelectionNCaretVirtualSpace() this.__scimoz.setSelectionNCaretVirtualSpace.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.delLineRight =
    function meth_delLineRight() this.__scimoz.delLineRight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.homeDisplayExtend =
    function meth_homeDisplayExtend() this.__scimoz.homeDisplayExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetChangeable =
    function meth_styleGetChangeable() this.__scimoz.styleGetChangeable.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.describeProperty =
    function meth_describeProperty() this.__scimoz.describeProperty.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.endDrop =
    function meth_endDrop() this.__scimoz.endDrop.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.pageDown =
    function meth_pageDown() this.__scimoz.pageDown.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.positionBefore =
    function meth_positionBefore() this.__scimoz.positionBefore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setKeyWords =
    function meth_setKeyWords() this.__scimoz.setKeyWords.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerSetBack =
    function meth_markerSetBack() this.__scimoz.markerSetBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.pointXFromPosition =
    function meth_pointXFromPosition() this.__scimoz.pointXFromPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineUpExtend =
    function meth_lineUpExtend() this.__scimoz.lineUpExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicatorAllOnFor =
    function meth_indicatorAllOnFor() this.__scimoz.indicatorAllOnFor.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetCharacterSet =
    function meth_styleSetCharacterSet() this.__scimoz.styleSetCharacterSet.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicatorFillRange =
    function meth_indicatorFillRange() this.__scimoz.indicatorFillRange.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.docLineFromVisible =
    function meth_docLineFromVisible() this.__scimoz.docLineFromVisible.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCGetCurrentText =
    function meth_autoCGetCurrentText() this.__scimoz.autoCGetCurrentText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.tab =
    function meth_tab() this.__scimoz.tab.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getFoldLevel =
    function meth_getFoldLevel() this.__scimoz.getFoldLevel.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.deleteBack =
    function meth_deleteBack() this.__scimoz.deleteBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineEndExtend =
    function meth_lineEndExtend() this.__scimoz.lineEndExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCCancel =
    function meth_autoCCancel() this.__scimoz.autoCCancel.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.marginTextClearAll =
    function meth_marginTextClearAll() this.__scimoz.marginTextClearAll.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.addUndoAction =
    function meth_addUndoAction() this.__scimoz.addUndoAction.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.pageUpExtend =
    function meth_pageUpExtend() this.__scimoz.pageUpExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.addText =
    function meth_addText() this.__scimoz.addText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelection =
    function meth_setSelection() this.__scimoz.setSelection.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.addRefDocument =
    function meth_addRefDocument() this.__scimoz.addRefDocument.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordPartRight =
    function meth_wordPartRight() this.__scimoz.wordPartRight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.buttonUp =
    function meth_buttonUp() this.__scimoz.buttonUp.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.deleteBackNotLine =
    function meth_deleteBackNotLine() this.__scimoz.deleteBackNotLine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCPosStart =
    function meth_autoCPosStart() this.__scimoz.autoCPosStart.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.stutteredPageDownExtend =
    function meth_stutteredPageDownExtend() this.__scimoz.stutteredPageDownExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetSizeFractional =
    function meth_styleGetSizeFractional() this.__scimoz.styleGetSizeFractional.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getFoldExpanded =
    function meth_getFoldExpanded() this.__scimoz.getFoldExpanded.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelBack =
    function meth_setSelBack() this.__scimoz.setSelBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetBack =
    function meth_styleGetBack() this.__scimoz.styleGetBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charRightExtend =
    function meth_charRightExtend() this.__scimoz.charRightExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.moveSelectedLinesDown =
    function meth_moveSelectedLinesDown() this.__scimoz.moveSelectedLinesDown.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getStyledText =
    function meth_getStyledText() this.__scimoz.getStyledText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.createLoader =
    function meth_createLoader() this.__scimoz.createLoader.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.annotationGetStyle =
    function meth_annotationGetStyle() this.__scimoz.annotationGetStyle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineTranspose =
    function meth_lineTranspose() this.__scimoz.lineTranspose.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setPunctuationChars =
    function meth_setPunctuationChars() this.__scimoz.setPunctuationChars.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipActive =
    function meth_callTipActive() this.__scimoz.callTipActive.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.documentStartExtend =
    function meth_documentStartExtend() this.__scimoz.documentStartExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.marginGetStyle =
    function meth_marginGetStyle() this.__scimoz.marginGetStyle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipShow =
    function meth_callTipShow() this.__scimoz.callTipShow.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setLengthForEncode =
    function meth_setLengthForEncode() this.__scimoz.setLengthForEncode.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.unhookEvents =
    function meth_unhookEvents() this.__scimoz.unhookEvents.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getStyleAt =
    function meth_getStyleAt() this.__scimoz.getStyleAt.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineEndDisplayExtend =
    function meth_lineEndDisplayExtend() this.__scimoz.lineEndDisplayExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetUnderline =
    function meth_styleSetUnderline() this.__scimoz.styleSetUnderline.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.startRecord =
    function meth_startRecord() this.__scimoz.startRecord.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.assignCmdKey =
    function meth_assignCmdKey() this.__scimoz.assignCmdKey.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.newLine =
    function meth_newLine() this.__scimoz.newLine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerLineFromHandle =
    function meth_markerLineFromHandle() this.__scimoz.markerLineFromHandle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerAdd =
    function meth_markerAdd() this.__scimoz.markerAdd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.registerImage =
    function meth_registerImage() this.__scimoz.registerImage.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getSelectionNAnchor =
    function meth_getSelectionNAnchor() this.__scimoz.getSelectionNAnchor.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCComplete =
    function meth_autoCComplete() this.__scimoz.autoCComplete.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.insertText =
    function meth_insertText() this.__scimoz.insertText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setWhitespaceBack =
    function meth_setWhitespaceBack() this.__scimoz.setWhitespaceBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineDownRectExtend =
    function meth_lineDownRectExtend() this.__scimoz.lineDownRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.annotationSetStyles =
    function meth_annotationSetStyles() this.__scimoz.annotationSetStyles.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getRangePointer =
    function meth_getRangePointer() this.__scimoz.getRangePointer.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charLeft =
    function meth_charLeft() this.__scimoz.charLeft.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicGetAlpha =
    function meth_indicGetAlpha() this.__scimoz.indicGetAlpha.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLine =
    function meth_getLine() this.__scimoz.getLine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineLength =
    function meth_lineLength() this.__scimoz.lineLength.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetUnderline =
    function meth_styleGetUnderline() this.__scimoz.styleGetUnderline.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.positionAtColumn =
    function meth_positionAtColumn() this.__scimoz.positionAtColumn.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerSetFore =
    function meth_markerSetFore() this.__scimoz.markerSetFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordRightEnd =
    function meth_wordRightEnd() this.__scimoz.wordRightEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicSetOutlineAlpha =
    function meth_indicSetOutlineAlpha() this.__scimoz.indicSetOutlineAlpha.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.marginGetText =
    function meth_marginGetText() this.__scimoz.marginGetText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineEndWrap =
    function meth_lineEndWrap() this.__scimoz.lineEndWrap.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setHotspotActiveBack =
    function meth_setHotspotActiveBack() this.__scimoz.setHotspotActiveBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.hideSelection =
    function meth_hideSelection() this.__scimoz.hideSelection.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.undo =
    function meth_undo() this.__scimoz.undo.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wrapCount =
    function meth_wrapCount() this.__scimoz.wrapCount.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineEndWrapExtend =
    function meth_lineEndWrapExtend() this.__scimoz.lineEndWrapExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.privateLexerCall =
    function meth_privateLexerCall() this.__scimoz.privateLexerCall.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getWCharAt =
    function meth_getWCharAt() this.__scimoz.getWCharAt.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordLeftExtend =
    function meth_wordLeftExtend() this.__scimoz.wordLeftExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.countCharacters =
    function meth_countCharacters() this.__scimoz.countCharacters.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setHotspotActiveFore =
    function meth_setHotspotActiveFore() this.__scimoz.setHotspotActiveFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerDeleteAll =
    function meth_markerDeleteAll() this.__scimoz.markerDeleteAll.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getMarginMaskN =
    function meth_getMarginMaskN() this.__scimoz.getMarginMaskN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineScrollUp =
    function meth_lineScrollUp() this.__scimoz.lineScrollUp.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.swapMainAnchorCaret =
    function meth_swapMainAnchorCaret() this.__scimoz.swapMainAnchorCaret.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordEndPosition =
    function meth_wordEndPosition() this.__scimoz.wordEndPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setFoldMarginColour =
    function meth_setFoldMarginColour() this.__scimoz.setFoldMarginColour.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.gotoLine =
    function meth_gotoLine() this.__scimoz.gotoLine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.hookEvents =
    function meth_hookEvents() this.__scimoz.hookEvents.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.sendUpdateCommands =
    function meth_sendUpdateCommands() this.__scimoz.sendUpdateCommands.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setLineState =
    function meth_setLineState() this.__scimoz.setLineState.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.linesSplit =
    function meth_linesSplit() this.__scimoz.linesSplit.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.replaceSel =
    function meth_replaceSel() this.__scimoz.replaceSel.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setHotspotActiveUnderline =
    function meth_setHotspotActiveUnderline() this.__scimoz.setHotspotActiveUnderline.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.ensureVisibleEnforcePolicy =
    function meth_ensureVisibleEnforcePolicy() this.__scimoz.ensureVisibleEnforcePolicy.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerEnableHighlight =
    function meth_markerEnableHighlight() this.__scimoz.markerEnableHighlight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charLeftExtend =
    function meth_charLeftExtend() this.__scimoz.charLeftExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markClosed =
    function meth_markClosed() this.__scimoz.markClosed.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setXCaretPolicy =
    function meth_setXCaretPolicy() this.__scimoz.setXCaretPolicy.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerSymbolDefined =
    function meth_markerSymbolDefined() this.__scimoz.markerSymbolDefined.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetItalic =
    function meth_styleGetItalic() this.__scimoz.styleGetItalic.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setProperty =
    function meth_setProperty() this.__scimoz.setProperty.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.copy =
    function meth_copy() this.__scimoz.copy.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.chooseCaretX =
    function meth_chooseCaretX() this.__scimoz.chooseCaretX.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetSize =
    function meth_styleGetSize() this.__scimoz.styleGetSize.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setFoldLevel =
    function meth_setFoldLevel() this.__scimoz.setFoldLevel.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.moveCaretInsideView =
    function meth_moveCaretInsideView() this.__scimoz.moveCaretInsideView.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setLexerLanguage =
    function meth_setLexerLanguage() this.__scimoz.setLexerLanguage.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getSelectionNStart =
    function meth_getSelectionNStart() this.__scimoz.getSelectionNStart.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetBold =
    function meth_styleSetBold() this.__scimoz.styleSetBold.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicSetStyle =
    function meth_indicSetStyle() this.__scimoz.indicSetStyle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.backTab =
    function meth_backTab() this.__scimoz.backTab.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.releaseDocument =
    function meth_releaseDocument() this.__scimoz.releaseDocument.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.searchInTarget =
    function meth_searchInTarget() this.__scimoz.searchInTarget.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLineSelEndPosition =
    function meth_getLineSelEndPosition() this.__scimoz.getLineSelEndPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.addChar =
    function meth_addChar() this.__scimoz.addChar.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.pageDownExtend =
    function meth_pageDownExtend() this.__scimoz.pageDownExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.null =
    function meth_null() this.__scimoz.null.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.emptyUndoBuffer =
    function meth_emptyUndoBuffer() this.__scimoz.emptyUndoBuffer.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineCopy =
    function meth_lineCopy() this.__scimoz.lineCopy.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.linesJoin =
    function meth_linesJoin() this.__scimoz.linesJoin.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getFoldParent =
    function meth_getFoldParent() this.__scimoz.getFoldParent.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getSelectionNCaretVirtualSpace =
    function meth_getSelectionNCaretVirtualSpace() this.__scimoz.getSelectionNCaretVirtualSpace.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.homeExtend =
    function meth_homeExtend() this.__scimoz.homeExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.homeWrap =
    function meth_homeWrap() this.__scimoz.homeWrap.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.copyAllowLine =
    function meth_copyAllowLine() this.__scimoz.copyAllowLine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.clear =
    function meth_clear() this.__scimoz.clear.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.annotationSetStyle =
    function meth_annotationSetStyle() this.__scimoz.annotationSetStyle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordLeft =
    function meth_wordLeft() this.__scimoz.wordLeft.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.gotoPos =
    function meth_gotoPos() this.__scimoz.gotoPos.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerGet =
    function meth_markerGet() this.__scimoz.markerGet.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.marginSetStyle =
    function meth_marginSetStyle() this.__scimoz.marginSetStyle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setYCaretPolicy =
    function meth_setYCaretPolicy() this.__scimoz.setYCaretPolicy.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSavePoint =
    function meth_setSavePoint() this.__scimoz.setSavePoint.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setWhitespaceChars =
    function meth_setWhitespaceChars() this.__scimoz.setWhitespaceChars.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.stutteredPageUpExtend =
    function meth_stutteredPageUpExtend() this.__scimoz.stutteredPageUpExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getMarginWidthN =
    function meth_getMarginWidthN() this.__scimoz.getMarginWidthN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerPrevious =
    function meth_markerPrevious() this.__scimoz.markerPrevious.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.marginGetStyles =
    function meth_marginGetStyles() this.__scimoz.marginGetStyles.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.documentStart =
    function meth_documentStart() this.__scimoz.documentStart.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.vCHomeDisplayExtend =
    function meth_vCHomeDisplayExtend() this.__scimoz.vCHomeDisplayExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.delWordRightEnd =
    function meth_delWordRightEnd() this.__scimoz.delWordRightEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineEnd =
    function meth_lineEnd() this.__scimoz.lineEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.annotationClearAll =
    function meth_annotationClearAll() this.__scimoz.annotationClearAll.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.pageUpRectExtend =
    function meth_pageUpRectExtend() this.__scimoz.pageUpRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetItalic =
    function meth_styleSetItalic() this.__scimoz.styleSetItalic.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.propertyType =
    function meth_propertyType() this.__scimoz.propertyType.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.searchPrev =
    function meth_searchPrev() this.__scimoz.searchPrev.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.rGBAImageSetWidth =
    function meth_rGBAImageSetWidth() this.__scimoz.rGBAImageSetWidth.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.homeDisplay =
    function meth_homeDisplay() this.__scimoz.homeDisplay.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerAddSet =
    function meth_markerAddSet() this.__scimoz.markerAddSet.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setMarginWidthN =
    function meth_setMarginWidthN() this.__scimoz.setMarginWidthN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelectionNAnchor =
    function meth_setSelectionNAnchor() this.__scimoz.setSelectionNAnchor.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.vCHomeExtend =
    function meth_vCHomeExtend() this.__scimoz.vCHomeExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSel =
    function meth_setSel() this.__scimoz.setSel.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetEOLFilled =
    function meth_styleGetEOLFilled() this.__scimoz.styleGetEOLFilled.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.delWordLeft =
    function meth_delWordLeft() this.__scimoz.delWordLeft.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.zoomOut =
    function meth_zoomOut() this.__scimoz.zoomOut.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getMarginCursorN =
    function meth_getMarginCursorN() this.__scimoz.getMarginCursorN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.paraUp =
    function meth_paraUp() this.__scimoz.paraUp.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.addSelection =
    function meth_addSelection() this.__scimoz.addSelection.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.stutteredPageDown =
    function meth_stutteredPageDown() this.__scimoz.stutteredPageDown.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charPosAtPosition =
    function meth_charPosAtPosition() this.__scimoz.charPosAtPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipPosStart =
    function meth_callTipPosStart() this.__scimoz.callTipPosStart.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.annotationGetStyles =
    function meth_annotationGetStyles() this.__scimoz.annotationGetStyles.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetCase =
    function meth_styleGetCase() this.__scimoz.styleGetCase.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipSetPosition =
    function meth_callTipSetPosition() this.__scimoz.callTipSetPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.rGBAImageSetScale =
    function meth_rGBAImageSetScale() this.__scimoz.rGBAImageSetScale.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetHotSpot =
    function meth_styleSetHotSpot() this.__scimoz.styleSetHotSpot.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.paraDown =
    function meth_paraDown() this.__scimoz.paraDown.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicSetFore =
    function meth_indicSetFore() this.__scimoz.indicSetFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getCharAt =
    function meth_getCharAt() this.__scimoz.getCharAt.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.beginUndoAction =
    function meth_beginUndoAction() this.__scimoz.beginUndoAction.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineCut =
    function meth_lineCut() this.__scimoz.lineCut.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineEndDisplay =
    function meth_lineEndDisplay() this.__scimoz.lineEndDisplay.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleClearAll =
    function meth_styleClearAll() this.__scimoz.styleClearAll.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleResetDefault =
    function meth_styleResetDefault() this.__scimoz.styleResetDefault.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.vCHome =
    function meth_vCHome() this.__scimoz.vCHome.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.canRedo =
    function meth_canRedo() this.__scimoz.canRedo.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineFromPosition =
    function meth_lineFromPosition() this.__scimoz.lineFromPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setVisiblePolicy =
    function meth_setVisiblePolicy() this.__scimoz.setVisiblePolicy.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.loadLexerLibrary =
    function meth_loadLexerLibrary() this.__scimoz.loadLexerLibrary.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.clearAllCmdKeys =
    function meth_clearAllCmdKeys() this.__scimoz.clearAllCmdKeys.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.marginSetText =
    function meth_marginSetText() this.__scimoz.marginSetText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charRight =
    function meth_charRight() this.__scimoz.charRight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setStyling =
    function meth_setStyling() this.__scimoz.setStyling.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerSetAlpha =
    function meth_markerSetAlpha() this.__scimoz.markerSetAlpha.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineEndRectExtend =
    function meth_lineEndRectExtend() this.__scimoz.lineEndRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charLeftRectExtend =
    function meth_charLeftRectExtend() this.__scimoz.charLeftRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.cancel =
    function meth_cancel() this.__scimoz.cancel.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.startStyling =
    function meth_startStyling() this.__scimoz.startStyling.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.editToggleOvertype =
    function meth_editToggleOvertype() this.__scimoz.editToggleOvertype.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.hideLines =
    function meth_hideLines() this.__scimoz.hideLines.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.canUndo =
    function meth_canUndo() this.__scimoz.canUndo.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.annotationSetText =
    function meth_annotationSetText() this.__scimoz.annotationSetText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setMarginSensitiveN =
    function meth_setMarginSensitiveN() this.__scimoz.setMarginSensitiveN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.stopTimers =
    function meth_stopTimers() this.__scimoz.stopTimers.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.clearCmdKey =
    function meth_clearCmdKey() this.__scimoz.clearCmdKey.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineUpRectExtend =
    function meth_lineUpRectExtend() this.__scimoz.lineUpRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.registerRGBAImage =
    function meth_registerRGBAImage() this.__scimoz.registerRGBAImage.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordLeftEndExtend =
    function meth_wordLeftEndExtend() this.__scimoz.wordLeftEndExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.positionAtChar =
    function meth_positionAtChar() this.__scimoz.positionAtChar.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.replaceTarget =
    function meth_replaceTarget() this.__scimoz.replaceTarget.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelectionNCaret =
    function meth_setSelectionNCaret() this.__scimoz.setSelectionNCaret.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetHotSpot =
    function meth_styleGetHotSpot() this.__scimoz.styleGetHotSpot.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetChangeable =
    function meth_styleSetChangeable() this.__scimoz.styleSetChangeable.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.braceHighlight =
    function meth_braceHighlight() this.__scimoz.braceHighlight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicGetOutlineAlpha =
    function meth_indicGetOutlineAlpha() this.__scimoz.indicGetOutlineAlpha.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetBack =
    function meth_styleSetBack() this.__scimoz.styleSetBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.canPaste =
    function meth_canPaste() this.__scimoz.canPaste.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetFont =
    function meth_styleSetFont() this.__scimoz.styleSetFont.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getSelectionNEnd =
    function meth_getSelectionNEnd() this.__scimoz.getSelectionNEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.homeRectExtend =
    function meth_homeRectExtend() this.__scimoz.homeRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setFoldFlags =
    function meth_setFoldFlags() this.__scimoz.setFoldFlags.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.clearRegisteredImages =
    function meth_clearRegisteredImages() this.__scimoz.clearRegisteredImages.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.delLineLeft =
    function meth_delLineLeft() this.__scimoz.delLineLeft.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.textHeight =
    function meth_textHeight() this.__scimoz.textHeight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.encodedFromUTF8 =
    function meth_encodedFromUTF8() this.__scimoz.encodedFromUTF8.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setCharsDefault =
    function meth_setCharsDefault() this.__scimoz.setCharsDefault.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCShow =
    function meth_autoCShow() this.__scimoz.autoCShow.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCActive =
    function meth_autoCActive() this.__scimoz.autoCActive.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getPropertyExpanded =
    function meth_getPropertyExpanded() this.__scimoz.getPropertyExpanded.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getPropertyInt =
    function meth_getPropertyInt() this.__scimoz.getPropertyInt.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setWhitespaceFore =
    function meth_setWhitespaceFore() this.__scimoz.setWhitespaceFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicGetStyle =
    function meth_indicGetStyle() this.__scimoz.indicGetStyle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getMarginTypeN =
    function meth_getMarginTypeN() this.__scimoz.getMarginTypeN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.vCHomeWrap =
    function meth_vCHomeWrap() this.__scimoz.vCHomeWrap.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.endUndoAction =
    function meth_endUndoAction() this.__scimoz.endUndoAction.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetFore =
    function meth_styleSetFore() this.__scimoz.styleSetFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLastChild =
    function meth_getLastChild() this.__scimoz.getLastChild.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.delWordRight =
    function meth_delWordRight() this.__scimoz.delWordRight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerDefinePixmap =
    function meth_markerDefinePixmap() this.__scimoz.markerDefinePixmap.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerDefineRGBAImage =
    function meth_markerDefineRGBAImage() this.__scimoz.markerDefineRGBAImage.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerDelete =
    function meth_markerDelete() this.__scimoz.markerDelete.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicatorEnd =
    function meth_indicatorEnd() this.__scimoz.indicatorEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.annotationGetText =
    function meth_annotationGetText() this.__scimoz.annotationGetText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordPartLeftExtend =
    function meth_wordPartLeftExtend() this.__scimoz.wordPartLeftExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.replaceTargetRE =
    function meth_replaceTargetRE() this.__scimoz.replaceTargetRE.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordRightExtend =
    function meth_wordRightExtend() this.__scimoz.wordRightExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.userListShow =
    function meth_userListShow() this.__scimoz.userListShow.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineDown =
    function meth_lineDown() this.__scimoz.lineDown.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getMarginSensitiveN =
    function meth_getMarginSensitiveN() this.__scimoz.getMarginSensitiveN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getCurLine =
    function meth_getCurLine() this.__scimoz.getCurLine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.targetAsUTF8 =
    function meth_targetAsUTF8() this.__scimoz.targetAsUTF8.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getHotspotActiveUnderline =
    function meth_getHotspotActiveUnderline() this.__scimoz.getHotspotActiveUnderline.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.contractedFoldNext =
    function meth_contractedFoldNext() this.__scimoz.contractedFoldNext.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCStops =
    function meth_autoCStops() this.__scimoz.autoCStops.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicGetUnder =
    function meth_indicGetUnder() this.__scimoz.indicGetUnder.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipSetForeHlt =
    function meth_callTipSetForeHlt() this.__scimoz.callTipSetForeHlt.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.autoCSelect =
    function meth_autoCSelect() this.__scimoz.autoCSelect.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.cut =
    function meth_cut() this.__scimoz.cut.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setStylingEx =
    function meth_setStylingEx() this.__scimoz.setStylingEx.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.vCHomeDisplay =
    function meth_vCHomeDisplay() this.__scimoz.vCHomeDisplay.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.rGBAImageSetHeight =
    function meth_rGBAImageSetHeight() this.__scimoz.rGBAImageSetHeight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setEmptySelection =
    function meth_setEmptySelection() this.__scimoz.setEmptySelection.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelectionNAnchorVirtualSpace =
    function meth_setSelectionNAnchorVirtualSpace() this.__scimoz.setSelectionNAnchorVirtualSpace.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.appendText =
    function meth_appendText() this.__scimoz.appendText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetFont =
    function meth_styleGetFont() this.__scimoz.styleGetFont.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.selectionDuplicate =
    function meth_selectionDuplicate() this.__scimoz.selectionDuplicate.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setMarginTypeN =
    function meth_setMarginTypeN() this.__scimoz.setMarginTypeN.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.findIndicatorShow =
    function meth_findIndicatorShow() this.__scimoz.findIndicatorShow.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipSetHlt =
    function meth_callTipSetHlt() this.__scimoz.callTipSetHlt.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.clearDocumentStyle =
    function meth_clearDocumentStyle() this.__scimoz.clearDocumentStyle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.scrollCaret =
    function meth_scrollCaret() this.__scimoz.scrollCaret.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordPartRightExtend =
    function meth_wordPartRightExtend() this.__scimoz.wordPartRightExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.verticalCentreCaret =
    function meth_verticalCentreCaret() this.__scimoz.verticalCentreCaret.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.searchNext =
    function meth_searchNext() this.__scimoz.searchNext.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.braceMatch =
    function meth_braceMatch() this.__scimoz.braceMatch.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicGetFore =
    function meth_indicGetFore() this.__scimoz.indicGetFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charPositionFromPointClose =
    function meth_charPositionFromPointClose() this.__scimoz.charPositionFromPointClose.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charRightRectExtend =
    function meth_charRightRectExtend() this.__scimoz.charRightRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.clearAll =
    function meth_clearAll() this.__scimoz.clearAll.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.zoomIn =
    function meth_zoomIn() this.__scimoz.zoomIn.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.createDocument =
    function meth_createDocument() this.__scimoz.createDocument.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.positionFromPoint =
    function meth_positionFromPoint() this.__scimoz.positionFromPoint.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.home =
    function meth_home() this.__scimoz.home.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.positionFromLine =
    function meth_positionFromLine() this.__scimoz.positionFromLine.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetSizeFractional =
    function meth_styleSetSizeFractional() this.__scimoz.styleSetSizeFractional.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.toggleFold =
    function meth_toggleFold() this.__scimoz.toggleFold.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.redo =
    function meth_redo() this.__scimoz.redo.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetSize =
    function meth_styleSetSize() this.__scimoz.styleSetSize.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.changeLexerState =
    function meth_changeLexerState() this.__scimoz.changeLexerState.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getWhitespaceChars =
    function meth_getWhitespaceChars() this.__scimoz.getWhitespaceChars.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLineIndentation =
    function meth_getLineIndentation() this.__scimoz.getLineIndentation.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerDeleteHandle =
    function meth_markerDeleteHandle() this.__scimoz.markerDeleteHandle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipUseStyle =
    function meth_callTipUseStyle() this.__scimoz.callTipUseStyle.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.allocate =
    function meth_allocate() this.__scimoz.allocate.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getSelectionNAnchorVirtualSpace =
    function meth_getSelectionNAnchorVirtualSpace() this.__scimoz.getSelectionNAnchorVirtualSpace.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordRightEndExtend =
    function meth_wordRightEndExtend() this.__scimoz.wordRightEndExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.scrollToStart =
    function meth_scrollToStart() this.__scimoz.scrollToStart.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.paste =
    function meth_paste() this.__scimoz.paste.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.colourise =
    function meth_colourise() this.__scimoz.colourise.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelFore =
    function meth_setSelFore() this.__scimoz.setSelFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.charPositionFromPoint =
    function meth_charPositionFromPoint() this.__scimoz.charPositionFromPoint.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lowerCase =
    function meth_lowerCase() this.__scimoz.lowerCase.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getColumn =
    function meth_getColumn() this.__scimoz.getColumn.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.braceBadLight =
    function meth_braceBadLight() this.__scimoz.braceBadLight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.pageUp =
    function meth_pageUp() this.__scimoz.pageUp.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineDelete =
    function meth_lineDelete() this.__scimoz.lineDelete.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.paraUpExtend =
    function meth_paraUpExtend() this.__scimoz.paraUpExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.grabFocus =
    function meth_grabFocus() this.__scimoz.grabFocus.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetCase =
    function meth_styleSetCase() this.__scimoz.styleSetCase.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLexerLanguage =
    function meth_getLexerLanguage() this.__scimoz.getLexerLanguage.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.pageDownRectExtend =
    function meth_pageDownRectExtend() this.__scimoz.pageDownRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.doBraceMatch =
    function meth_doBraceMatch() this.__scimoz.doBraceMatch.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setFoldExpanded =
    function meth_setFoldExpanded() this.__scimoz.setFoldExpanded.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.addStyledText =
    function meth_addStyledText() this.__scimoz.addStyledText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleSetVisible =
    function meth_styleSetVisible() this.__scimoz.styleSetVisible.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineScroll =
    function meth_lineScroll() this.__scimoz.lineScroll.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.vCHomeRectExtend =
    function meth_vCHomeRectExtend() this.__scimoz.vCHomeRectExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineUp =
    function meth_lineUp() this.__scimoz.lineUp.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getProperty =
    function meth_getProperty() this.__scimoz.getProperty.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.targetFromSelection =
    function meth_targetFromSelection() this.__scimoz.targetFromSelection.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineDuplicate =
    function meth_lineDuplicate() this.__scimoz.lineDuplicate.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setSelectionNStart =
    function meth_setSelectionNStart() this.__scimoz.setSelectionNStart.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipCancel =
    function meth_callTipCancel() this.__scimoz.callTipCancel.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineScrollDown =
    function meth_lineScrollDown() this.__scimoz.lineScrollDown.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.paraDownExtend =
    function meth_paraDownExtend() this.__scimoz.paraDownExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.documentEndExtend =
    function meth_documentEndExtend() this.__scimoz.documentEndExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.scrollToEnd =
    function meth_scrollToEnd() this.__scimoz.scrollToEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordRight =
    function meth_wordRight() this.__scimoz.wordRight.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.searchAnchor =
    function meth_searchAnchor() this.__scimoz.searchAnchor.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setLineIndentation =
    function meth_setLineIndentation() this.__scimoz.setLineIndentation.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.lineDownExtend =
    function meth_lineDownExtend() this.__scimoz.lineDownExtend.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.styleGetVisible =
    function meth_styleGetVisible() this.__scimoz.styleGetVisible.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getPunctuationChars =
    function meth_getPunctuationChars() this.__scimoz.getPunctuationChars.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.stutteredPageUp =
    function meth_stutteredPageUp() this.__scimoz.stutteredPageUp.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicatorClearRange =
    function meth_indicatorClearRange() this.__scimoz.indicatorClearRange.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.copyText =
    function meth_copyText() this.__scimoz.copyText.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.setAdditionalSelBack =
    function meth_setAdditionalSelBack() this.__scimoz.setAdditionalSelBack.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.documentEnd =
    function meth_documentEnd() this.__scimoz.documentEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.pointYFromPosition =
    function meth_pointYFromPosition() this.__scimoz.pointYFromPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.indicSetAlpha =
    function meth_indicSetAlpha() this.__scimoz.indicSetAlpha.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.callTipSetFore =
    function meth_callTipSetFore() this.__scimoz.callTipSetFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getTextRange =
    function meth_getTextRange() this.__scimoz.getTextRange.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getHotspotActiveFore =
    function meth_getHotspotActiveFore() this.__scimoz.getHotspotActiveFore.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLineEndPosition =
    function meth_getLineEndPosition() this.__scimoz.getLineEndPosition.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.markerNext =
    function meth_markerNext() this.__scimoz.markerNext.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.getLineVisible =
    function meth_getLineVisible() this.__scimoz.getLineVisible.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.wordLeftEnd =
    function meth_wordLeftEnd() this.__scimoz.wordLeftEnd.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.findIndicatorFlash =
    function meth_findIndicatorFlash() this.__scimoz.findIndicatorFlash.apply(this.__scimoz, arguments);
koSciMozWrapper.prototype.ensureVisible =
    function meth_ensureVisible() this.__scimoz.ensureVisible.apply(this.__scimoz, arguments);


// implement QI. This needs to happen after the generated code because that
// determines which interfaces to support (due to the _Part? interfaces).
koSciMozWrapper.prototype.QueryInterface =
    XPCOMUtils.generateQI(koSciMozWrapper.prototype._interfaces);

// setWordChars compatibility wrapper; see bug 80095 - new code should be using
// scimoz.wordChars = "xxx" instead of scimoz.setWordChars("xxx")
koSciMozWrapper.prototype.setWordChars =
    function setWordChars(aCharacters) {
        this._log.deprecated('scimoz.setWordChars() is deprecated, use scimoz.wordChars = "abc" instead');
        this.wordChars = aCharacters;
    };

XPCOMUtils.defineLazyGetter(koSciMozWrapper.prototype, "_log", function() {
    return Cu.import("chrome://komodo/content/library/logging.js", {})
             .logging
             .getLogger("scimoz.wrapper");
});


/**
 * Initialize the plugin wrapper.
 * @param aPlugin the plugin to wrap
 * @note This isn't an interface method; also, it overrides the stub version
 *       because that does the wrong thing completely (we don't want to just
 *       pass everything to the plugin).
 */
koSciMozWrapper.prototype.init =
    function koSciMozWrapper_init(aPlugin, aFocusElement) {
        this.__scimoz = aPlugin;
    };

// XPCOM registration of class.
var components = [koSciMozWrapper];
const NSGetFactory = XPCOMUtils.generateNSGetFactory(components);
