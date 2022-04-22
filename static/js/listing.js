$(document).ready(function () {
    listing();
});

const listing = () => {
    $.ajax({
        type: 'GET',
        url: '/news',
        data: {},
        success: function (response) {
            let news_list = response;
            $('#cards-box').empty();


            for (let i = 0; i < news_list['news_list'].length; i++) {
                let title = news_list['news_list'][i].split('$%$')[0];
                let contents = news_list['news_list'][i].split('$%$')[1];
                let html_data = `<div class="col">
                                        <div class="card h-100">
                                            <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                                                 class="card-img-top">
                                            <div class="card-body">
                                                <h5 class="card-title">${title}</h5>
                                                <p class="card-text">${contents}</p>
                                                <p>⭐⭐⭐</p>
                                                <p class="mycomment">대충 채워넣을 거</p>
                                            </div>
                                        </div>
                                    </div>`;
                $('#cards-box').append(html_data);
            }
        }
    })
}