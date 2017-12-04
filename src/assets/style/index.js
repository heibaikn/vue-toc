import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

// Create your style.
const style = {
    myButton: {
        color: 'green'
    }
}

// Compile styles, apply plugins.
const sheet = jss.createStyleSheet(style)

// If you want to render on the client, insert it into DOM.
sheet.attach()

// If you want to render server-side, get the css text.
sheet.toString()

console.log(sheet);

export default {}