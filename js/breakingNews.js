'use strict';

const breakingNewsWrapper = document.querySelector('.breaking_news_wrapper')

for (let breakingNewsImgCounter = 1; breakingNewsImgCounter < 9; breakingNewsImgCounter++) {
    breakingNewsWrapper.insertAdjacentHTML('beforeend', `<div class="breaking_news_item">
                    <a href="#" class="breaking_news_link">
                        <img class="breaking_news_img" src="img/breaking%20news/img${breakingNewsImgCounter}.png" alt="Amazing Blog Post">
                        <div class="breaking_news_date">12<br>Feb</div>
                        <span class="breaking_news_text">Amazing Blog Post</span>
                    </a>
                   <div class="breaking_news_comment">By admin<span>|</span><a href="#">2 comment</a></div>
              </div>
    `)
}
