class Error_k1r {
    render() {
        const html = `
        	<div class="container">
                <div class="error-message">
                    <h3>Технические работы</h3>
                   
                    <p>Извините за неудобства. Скоро всё обновим!</p>
                </div>
        	</div>
        `;

        ROOT_ERROR_K1R.innerHTML = html;
    }
}

const errorPage_k1r = new Error_k1r();