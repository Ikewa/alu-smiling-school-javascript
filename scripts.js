$(document).ready(function () {
    const $carouselQuotes = $("#carouselQuotes");
    const $loader = $("#quote-loader");

    // Fetch quotes data from the API
    $.ajax({
        url: "https://smileschool-api.alx-tools.com/quotes",
        method: "GET",
        success: function (data) {
            $loader.hide(); // Hide the loader once data is loaded

            // Loop through the fetched quotes and create carousel items
            $.each(data, function (index, quote) {
                const carouselItem = `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <div class="container pt-5 pb-5">
                            <div class="card mb-3 mt-3 background-primary border-0">
                                <div class="row no-gutters">
                                    <div class="col-md-3 text-center">
                                        <img src="${quote.pic_url}" class="rounded-circle" alt="${quote.name}" width="150" />
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body">
                                            <p class="card-text"> &raquo; ${quote.text} </p>
                                            <p class="card-text font-weight-bold mb-0">${quote.name}</p>
                                            <p class="card-text font-italic">${quote.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Append each new item to the carousel
                $carouselQuotes.append(carouselItem);
            });

            // Reinitialize the carousel (in case it wasn't initialized after content change)
            $('#carouselExampleControls').carousel();
        },
        error: function () {
            $loader.html("<p class='text-white'>Failed to load quotes. Please try again later.</p>");
        }
    });
});

$(document).ready(function() {
    const apiUrl = "https://smileschool-api.alx-tools.com/popular-tutorials";
    const $carouselInner = $("#popular-carousel");
    const $loader = $(".loader");

    function fetchCard() {
        $loader.show();
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(data) {
                $carouselInner.empty();
                const cardsPerSlide = 4; // Number of cards per carousel slide

                for (let i = 0; i < data.length; i += cardsPerSlide) {
                    const slideData = data.slice(i, i + cardsPerSlide);
                    const isActive = i === 0 ? "active" : "";
                    const carouselItem = `
                        <div class="carousel-item ${isActive}">
                            <div class="row align-items-center mx-auto">
                                ${slideData.map(card => `
                                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                                        <div class="card">
                                            <img src="${card.thumb_url}" alt="Video thumbnail" class="card-image-top">
                                            <div class="card-body">
                                                <h5 class="card-title font-weight-bold">${card.title}</h5>
                                                <p class="card-text text-muted">${card['sub-title']}</p>
                                                <div class="creator d-flex align-items-center">
                                                    <img src="${card.author_pic_url}" class="rounded-circle" alt="Creator of Video" width="30px">
                                                    <h6 class="pl-3 m-0 main-color">${card.author}</h6>
                                                </div>
                                                <div class="d-flex align-items-center mt-2">
                                                    ${'<span class="star">&#9733;</span>'.repeat(card.star)}
                                                    ${'<span class="star">&#9734;</span>'.repeat(5 - card.star)}
                                                    <span class="ml-auto">${card.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    $carouselInner.append(carouselItem);
                }
            },
            error: function() {
                alert("Error loading videos. Please try again later.");
            },
            complete: function() {
                $loader.hide(); // Hide the loader after AJAX call completes
            }
        });
    }

    fetchCard();
});

$(document).ready(function() {
    const apiUrl = "https://smileschool-api.alx-tools.com/latest-videos";
    const $carouselInner = $("#latest-carousel");
    const $loader = $(".loader");

    function fetchCard() {
        $loader.show();
        $.ajax({
            url: apiUrl,
            method: "GET",
            success: function(data) {
                $carouselInner.empty();
                const cardsPerSlide = 4; // Number of cards per carousel slide

                for (let i = 0; i < data.length; i += cardsPerSlide) {
                    const slideData = data.slice(i, i + cardsPerSlide);
                    const isActive = i === 0 ? "active" : "";
                    const carouselItem = `
                        <div class="carousel-item ${isActive}">
                            <div class="row align-items-center mx-auto">
                                ${slideData.map(card => `
                                    <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center">
                                        <div class="card">
                                            <img src="${card.thumb_url}" alt="Video thumbnail" class="card-image-top">
                                            <div class="card-body">
                                                <h5 class="card-title font-weight-bold">${card.title}</h5>
                                                <p class="card-text text-muted">${card['sub-title']}</p>
                                                <div class="creator d-flex align-items-center">
                                                    <img src="${card.author_pic_url}" class="rounded-circle" alt="Creator of Video" width="30px">
                                                    <h6 class="pl-3 m-0 main-color">${card.author}</h6>
                                                </div>
                                                <div class="d-flex align-items-center mt-2">
                                                    ${'<span class="star">&#9733;</span>'.repeat(card.star)}
                                                    ${'<span class="star">&#9734;</span>'.repeat(5 - card.star)}
                                                    <span class="ml-auto">${card.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    $carouselInner.append(carouselItem);
                }
            },
            error: function() {
                alert("Error loading videos. Please try again later.");
            },
            complete: function() {
                $loader.hide(); // Hide the loader after AJAX call completes
            }
        });
    }

    fetchCard();
});
