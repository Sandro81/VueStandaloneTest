new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        buttonCard: true,
        imgCard: [
            {name:"yellow", url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAADZCAMAAAAdUYxCAAAAA1BMVEX/609CC38RAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALcGxYEAAVIv8uIAAAAASUVORK5CYII="},
            {name:"red", url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"},
        ],
        show: true
    },
    methods: {
        showMethod: function (event) {
            this.show = !this.show;
            // `this` inside methods points to the Vue instance
            //alert('Hello ' + this.name + '!')
            // `event` is the native DOM event
            if (event) {

                //alert(event.target.tagName)
            }
        }
    }
});
