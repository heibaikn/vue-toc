import jss from 'jss'
import preset from 'jss-preset-default'

import _ZH from './zh';
import _EN from './en';

jss.setup(preset())

// Compile styles, apply plugins.
// const sheet = jss.createStyleSheet(_ZH)

// If you want to render on the client, insert it into DOM.
// sheet.attach()

// If you want to render server-side, get the css text.
// sheet.toString()

// console.log(sheet);

export default language => {
    if (language === 'zh') {
        return jss.createStyleSheet(_ZH).attach().classes
    }else{
        return jss.createStyleSheet(_EN).attach().classes
    }
}
