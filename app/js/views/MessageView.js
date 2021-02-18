class MessageView extends View {
    template(message) {
        return `<p class="alert alert-info">${message.get()}</p>`;
    }
}
