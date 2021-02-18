namespace Views {
    export class MessageView extends Views.View<Message> {

        template(message: Message): string {
            return `<p class="alert alert-info">${message.get()}</p>`;
        }
    }
}