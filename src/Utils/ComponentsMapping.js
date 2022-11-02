
import { attributeType } from '../constants';
import TextBox from '../Components/Common/TextBox';

export const getComponent = (attribute, eventHandler) => {
    switch (attribute.type) {
        case attributeType.TEXTBOX:
            return <TextBox {...attribute} {...eventHandler} />
    }
}