package clearJSProg

import kotlinx.html.button
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.h1
import kotlinx.html.js.onClickFunction
import kotlin.browser.document
import kotlin.dom.addClass

fun main(args: Array<String>) {
    println("Hello JS!")


    val div = document.getElementById("Header")


    val but1 = document.getElementById("clickMeButton1")
    but1!!.addEventListener( "click", {
        println("clicked")
        addComponentsByString()
    } )

    val but2 = document.getElementById("clickMeButton2")
    but2!!.addEventListener( "click", {
        println("clicked")
        addComponentsByDOMAPI()
    } )


    val but3 = document.getElementById("clickMeButton3")
    but3!!.addEventListener( "click", {
        println("clicked")
        addComponentsByKotlinBuildIn()
    } )

    sayGoodBy()
    sayGoodBy2()


}

fun addComponentsByString() {

    //построение дерева с помощью строк(неудобно, фу, смотри конец, как надо делать)
    val html =
            """
            <h1>Hello 1</h1>
            <button id="clickMeButton">Click Me</button>
            """
    val root = document.getElementById("mainDiv")
    root!!.innerHTML += html

    val but = document.getElementById("clickMeButton")
    but!!.addEventListener("click", {
        println("clicked by stringMethod")
        addComponentsByDOMAPI()
    })


}

fun addComponentsByDOMAPI() {
    //Построение дерева с помощью DOM tree building API

    //Создание элементов в DOM
    val root = document.getElementById("mainDiv")
    val div = document.createElement("div")
    val h1 = document.createElement("h1")
    val b1 = document.createElement("button")

    //Создание иерархии элементов
    div.appendChild(h1)
    div.appendChild(b1)
    root!!.appendChild(div)

    //Добавление текстового контента внутрь
    //И создание ивента на кнопке
    h1.textContent = "Hello 2"
    b1.textContent = "Click me 2"
    b1.addEventListener( "click", {
        println("clicked")
        addComponentsByKotlinBuildIn()
    } )
    div.addClass("colomn2")

}

fun addComponentsByKotlinBuildIn() {

    //Построение с помощью Kotlin HTML builder`a
    //Создание элементов в DOM
    val root = document.getElementById("mainDiv")

    val div = document.create.div {

        h1 {
            + "Hello 3" // + оператор добавляет элементу текст
        }

        button {
            + "Click Me 3"
            onClickFunction = {
                println("Clicked again")
                addComponentsByString()
            }
        }

        classes = setOf("right")//способ добавить классы в div через библиотеку

    }

    div.addClass("colomn3")


    root!!.appendChild(div)

}