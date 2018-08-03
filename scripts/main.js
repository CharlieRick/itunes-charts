$(document).ready(function(){

    $.ajax({
        url: 'https://itunes.apple.com/gb/rss/topsongs/limit=50/explicit=true/json',
        dataType: 'JSONP',
        jsonpCallback: 'callback',
        type: 'GET',
        success: function (data) {
            
            var numberOneHTML = '';
            var itemHTML = '';
            $.each( data.feed.entry, function (i , item){
                if (i === 0) {
                    numberOneHTML += '<a href="' + item['im:collection'].link.attributes.href + '" target="_blank"><div class="row" id="numberOne"><div class="numberOneDiv"><div class="col-sm-4 noOneImgCol"><img src="' + item['im:image'][2].label + '" class="numberOneImage"></div><div class="col-sm-8 numberOne"><div id="numberOnePos"><h1>1</h1></div><h1>' + item['im:name'].label + '</h1><h2>' + item['im:artist'].label + '</h2></div></div></div></a>';

                    console.log(numberOneHTML);

                    $('#numberOneContainer').html(numberOneHTML);
                } else {
                

                itemHTML += '<a href="' + item['im:collection'].link.attributes.href + '" target="_blank"><div class="col-sm-3 itemDiv"><img class="albumArtwork" src="' + item['im:image'][2].label + '"><div class="position"><p>' + (i+1) + '</p></div><h1>' + item['im:name'].label + '</h1><h2>' + item['im:artist'].label + '</h2></div></a>';
                }
            });
            $('#content').html(itemHTML);

        }

        
    })

    $('#genreSelect, #typeSelect').change(function() {
        
        var genreUrl = 'https://itunes.apple.com/gb/rss/' + $('#typeSelect').val() + '/genre=' + $('#genreSelect').val() + '/limit=50/explicit=true/json'; 

        $.ajax({
            url: genreUrl,
            dataType: 'JSONP',
            jsonpCallback: 'callback',
            type: 'GET',
            success: function (data) {
                var numberOneHTML = '';
                var itemHTML = '';
                $.each( data.feed.entry, function (i , item){
                    if (i === 0) {
                        if ($('#typeSelect').val() === 'topalbums') {
                            numberOneHTML += '<a href="' + item.link.attributes.href + '" target="_blank"><div class="row" id="numberOne"><div class="numberOneDiv"><div class="col-sm-4 noOneImgCol"><img src="' + item['im:image'][2].label + '" class="numberOneImage"></div><div class="col-sm-8 numberOne"><div id="numberOnePos"><h1>1</h1></div><h1>' + item['im:name'].label + '</h1><h2>' + item['im:artist'].label + '</h2></div></div></div></a>';

                            console.log(numberOneHTML);

                            $('#numberOneContainer').html(numberOneHTML);
                        } else {
                            numberOneHTML += '<a href="' + item['im:collection'].link.attributes.href + '" target="_blank"><div class="row" id="numberOne"><div class="numberOneDiv"><div class="col-sm-4 noOneImgCol"><img src="' + item['im:image'][2].label + '" class="numberOneImage"></div><div class="col-sm-8 numberOne"><div id="numberOnePos"><h1>1</h1></div><h1>' + item['im:name'].label + '</h1><h2>' + item['im:artist'].label + '</h2></div></div></div></a>';

                            console.log(numberOneHTML);

                            $('#numberOneContainer').html(numberOneHTML);}
                    } else {
                    
                        if ($('#typeSelect').val() === 'topalbums') {

                            itemHTML += '<a href="' + item.link.attributes.href + '" target="_blank"><div class="col-sm-3 itemDiv"><img class="albumArtwork" src="' + item['im:image'][2].label + '"><div class="position"><p>' + (i+1) + '</p></div><h1>' + item['im:name'].label + '</h1><h2>' + item['im:artist'].label + '</h2></div></a>';

                        } else {
        
                        itemHTML += '<a href="' + item['im:collection'].link.attributes.href + '" target="_blank"><div class="col-sm-3 itemDiv"><img class="albumArtwork" src="' + item['im:image'][2].label + '"><div class="position"><p>' + (i+1) + '</p></div><h1>' + item['im:name'].label + '</h1><h2>' + item['im:artist'].label + '</h2></div></a>';}
                    }
                });
                $('#content').html(itemHTML);
    
            }
    
            
        })

    })

    


    function scrollToTop(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    }
        
    $('#backToTopText').click(scrollToTop);
})



// '<img class="albumArtwork" src="' + item.title.label + '"><h1>' + item.im.name.label + '</h1><h2>' + item.im.artist.label + '</h2></div>';

// item['im:artist'].label