class Error_pouf {
    render() {
        const html = `
        	<div class="container">
                <div class="error-message">
                    <h3>Технические работы</h3>
                   
                    <p>Извините за неудобства. Скоро всё обновим!</p>
                </div>
        	</div>
        `;

        ROOT_ERROR_POUF.innerHTML = html;
    }
}

const errorPage_pouf = new Error_pouf();