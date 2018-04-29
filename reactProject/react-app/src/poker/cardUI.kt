@file:Suppress("UnsafeCastFromDynamic")

import kotlinext.js.js
import kotlinx.html.style
import react.RBuilder
import react.ReactElement
import react.dom.div
import react.dom.h5
import kotlin.js.Math


fun RBuilder.cardsUI(numOfCards: Int ): List<ReactElement> {

    return IntRange(0, numOfCards - 1).map{
        div {
            h5 {
                +"Points: "
                + createCardsPoints( (( Math.random() * 12 ) + 2 ).toInt() )
            }
            attrs.style = makeCardsBeauty()

        }
    }


}

fun RBuilder.makeCardsBeauty(): String {
    return js {
        width = "5rem"
        height = "8rem"
        padding = "2rem"
        marginTop = "1rem"
        marginRight = "1rem"
        background = "#BDB74C"
    }
}

fun createCardsPoints(points: Int): String =
    when {
        (points < 11) -> points.toString()
        (points == 11) ->  "J"
        (points == 12) -> "D"
        (points == 13) -> "K"
        (points == 14) -> "A"
        else -> "0"
    }


