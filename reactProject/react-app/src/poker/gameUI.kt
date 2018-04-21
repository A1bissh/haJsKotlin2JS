@file:Suppress("UnsafeCastFromDynamic")
package poker

import cardsUI
import kotlinext.js.js
import kotlinx.html.style
import kotlinx.html.title
import react.RBuilder
import react.dom.div
import react.dom.h1

fun RBuilder.makePlayingDeck(){
    div {

        div {
            attrs.title = "Dealer"//добавление атрибутов

            h1 { +"Dealer Cards" }
            div {
                attrs.style = js { display = "flex" }
                cardsUI(3)
            }
        }

        div {

            attrs.title = "Player"
            h1 { +"Player Cards" }
            div {
                attrs.style = js {
                    display = "flex"
                }
                cardsUI(2)
            }

        }

    }
}