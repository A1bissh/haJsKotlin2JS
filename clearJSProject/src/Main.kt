package clearJSProg

import kotlinx.html.button
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.h1
import kotlinx.html.js.onClickFunction
import kotlin.browser.document

fun main(args: Array<String>) {
    println("Hello JS!")

    val x = 10
    //построение дерева с помощью строк(неудобно, фу, смотри конец, как надо делать)
    val html =
            """
        <h1>Hello HTML</h1>
        <p>$x</p>
        <button id="clickMeButton">Click Me</button>
        """
    val div = document.getElementById("mainDiv")
    div!!.innerHTML = html
    val but = document.getElementById("clickMeButton")
    but!!.addEventListener( "click", {
        println("clicked")
        addComponentsByDOMAPI()
    } )
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
            onClickFunction = { println("Clicked again") }
        }
    
    }

    root!!.appendChild(div)

}




