if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'clearJSProg'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'clearJSProg'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'clearJSProg'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'clearJSProg'.");
}
var clearJSProg = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_whohl6$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  function main$lambda(it) {
    println('clicked');
    addComponentsByDOMAPI();
    return Unit;
  }
  function main(args) {
    println('Hello JS!');
    var x = 10;
    var html = '\n        <h1>Hello HTML<\/h1>\n        <p>10<\/p>\n        <button id="clickMeButton">Click Me<\/button>\n        ';
    var div = document.getElementById('mainDiv');
    ensureNotNull(div).innerHTML = html;
    var but = document.getElementById('clickMeButton');
    ensureNotNull(but).addEventListener('click', main$lambda);
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
  }
  function addComponentsByKotlinBuildIn$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Hello 3');
    return Unit;
  }
  function addComponentsByKotlinBuildIn$lambda$lambda$lambda(it) {
    println('Clicked again');
    return Unit;
  }
  function addComponentsByKotlinBuildIn$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Click Me 3');
    set_onClickFunction($receiver, addComponentsByKotlinBuildIn$lambda$lambda$lambda);
    return Unit;
  }
  function addComponentsByKotlinBuildIn$lambda($receiver) {
    h1($receiver, void 0, addComponentsByKotlinBuildIn$lambda$lambda);
    button($receiver, void 0, void 0, void 0, void 0, addComponentsByKotlinBuildIn$lambda$lambda_0);
    return Unit;
  }
  function addComponentsByKotlinBuildIn() {
    var root = document.getElementById('mainDiv');
    var div_0 = div(get_create(document), void 0, addComponentsByKotlinBuildIn$lambda);
    ensureNotNull(root).appendChild(div_0);
  }
  var package$clearJSProg = _.clearJSProg || (_.clearJSProg = {});
  package$clearJSProg.main_kand9s$ = main;
  package$clearJSProg.addComponentsByDOMAPI = addComponentsByDOMAPI;
  package$clearJSProg.addComponentsByKotlinBuildIn = addComponentsByKotlinBuildIn;
  main([]);
  Kotlin.defineModule('clearJSProg', _);
  return _;
}(typeof clearJSProg === 'undefined' ? {} : clearJSProg, kotlin, this['kotlinx-html-js']);
