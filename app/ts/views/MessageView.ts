class MessageView extends View<Message> {

    template(message: Message): string {
        return `<p class="alert alert-info">${message.get()}</p>`;
    }
}