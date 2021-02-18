var Views;
(function (Views) {
    class MessageView extends Views.View {
        template(message) {
            return `<p class="alert alert-info">${message.get()}</p>`;
        }
    }
    Views.MessageView = MessageView;
})(Views || (Views = {}));
