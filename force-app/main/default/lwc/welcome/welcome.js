import { LightningElement } from 'lwc';

export default class Welcome extends LightningElement {
    message = 'Welcome! This is your first LWC component.';

    handleClick() {
        this.message = 'Hello! You have successfully created your first LWC component.';
    }
}