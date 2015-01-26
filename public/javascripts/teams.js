
// DOM Ready =============================================================
$(document).ready(function() {

    $("#select2").select2({
      width: "34%",
      placeholder: "Search a Team...",
      minimumInputLength: 2,
            ajax: {
                url: "teams/team",
                dataType: 'json', 
                    data: function(term, page) {
                        return {
                            q: term, //search term
                            page_limit: 10 // page size
                        };
                    },
                    results: function(data, page) {
                        console.log(data);
                        var newData = [];
                        _.each(data, function (item) {
                            newData.push({
                                id: item.id,  
                                market: item.market,
                                name: item.name
                            });
                        });
                        return { results: newData };
                    }

                },
        formatResult: formatResult, //dropdown rendering of selectable options
        formatNoMatches: formatNoMatches,
        formatSelection: formatSelection, //final selected options


    });
 
    
});

// Functions ============================================================= //

function formatResult(data){
    console.log(data);

    var render = '<div id ="team-market">'+data.market+ ' ' +data.name+' </div>';

    return render
    }

function formatSelection(data){
}

function formatNoMatches(data){
}













