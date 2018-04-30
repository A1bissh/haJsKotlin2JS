if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'untitled'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'untitled'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'untitled'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'untitled'.");
}
var untitled = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  function main$lambda(it) {
    println('clicked');
    addComponentsByString();
    return Unit;
  }
  function main$lambda_0(it) {
    println('clicked');
    addComponentsByDOMAPI();
    return Unit;
  }
  function main$lambda_1(it) {
    println('clicked');
    addComponentsByKotlinBuildIn();
    return Unit;
  }
  function main(args) {
    println('Hello JS!');
    var div = document.getElementById('Header');
    var but1 = document.getElementById('clickMeButton1');
    ensureNotNull(but1).addEventListener('click', main$lambda);
    var but2 = document.getElementById('clickMeButton2');
    ensureNotNull(but2).addEventListener('click', main$lambda_0);
    var but3 = document.getElementById('clickMeButton3');
    ensureNotNull(but3).addEventListener('click', main$lambda_1);
    sayGoodBy();
    sayGoodBy2();
  }
  function addComponentsByString$lambda(it) {
    println('clicked by stringMethod');
    addComponentsByDOMAPI();
    return Unit;
  }
  function addComponentsByString() {
    var html = '\n            <h1>Hello 1<\/h1>\n            <button id="clickMeButton">Click Me<\/button>\n            ';
    var root = document.getElementById('mainDiv');
    ensureNotNull(root).innerHTML = ensureNotNull(root).innerHTML + html;
    var but = document.getElementById('clickMeButton');
    ensureNotNull(but).addEventListener('click', addComponentsByString$lambda);
  }
  function addComponentsByDOMAPI$lambda(it) {
    println('clicked');
    addComponentsByKotlinBuildIn();
    return Unit;
  }
  function addComponentsByDOMAPI() {
    var root = document.getElementById('mainDiv');
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var b1 = document.createElement('button');
    div.appendChild(h1);
    div.appendChild(b1);
    ensureNotNull(root).appendChild(div);
    h1.textContent = 'Hello 2';
    b1.textContent = 'Click me 2';
    b1.addEventListener('click', addComponentsByDOMAPI$lambda);
    addClass(div, ['colomn2']);
  }
  function addComponentsByKotlinBuildIn$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Hello 3');
    return Unit;
  }
  function addComponentsByKotlinBuildIn$lambda$lambda$lambda(it) {
    println('Clicked again');
    addComponentsByString();
    return Unit;
  }
  function addComponentsByKotlinBuildIn$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Click Me 3');
    set_onClickFunction($receiver, addComponentsByKotlinBuildIn$lambda$lambda$lambda);
    return Unit;
  }
  function addComponentsByKotlinBuildIn$lambda($receiver) {
    h1($receiver, void 0, addComponentsByKotlinBuildIn$lambda$lambda);
    button($receiver, void 0, void 0, void 0, void 0, void 0, addComponentsByKotlinBuildIn$lambda$lambda_0);
    set_classes($receiver, setOf('right'));
    return Unit;
  }
  function addComponentsByKotlinBuildIn() {
    var root = document.getElementById('mainDiv');
    var div_0 = div(get_create(document), void 0, addComponentsByKotlinBuildIn$lambda);
    addClass(div_0, ['colomn3']);
    ensureNotNull(root).appendChild(div_0);
  }
  function sayGoodBy() {
    println('FuckModules');
  }
  function sayGoodBy2() {
    println('FuckModules');
  }
  var package$clearJSProg = _.clearJSProg || (_.clearJSProg = {});
  package$clearJSProg.main_kand9s$ = main;
  package$clearJSProg.addComponentsByString = addComponentsByString;
  package$clearJSProg.addComponentsByDOMAPI = addComponentsByDOMAPI;
  package$clearJSProg.addComponentsByKotlinBuildIn = addComponentsByKotlinBuildIn;
  package$clearJSProg.sayGoodBy = sayGoodBy;
  package$clearJSProg.sayGoodBy2 = sayGoodBy2;
  main([]);
  Kotlin.defineModule('untitled', _);
  return _;
}(typeof untitled === 'undefined' ? {} : untitled, kotlin, this['kotlinx-html-js']);
