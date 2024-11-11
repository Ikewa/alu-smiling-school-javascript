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
