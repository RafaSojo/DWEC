{
    function init() {

    }
    window.addEventListener("load", init);

    let calculateEndYear = function() {
        let dateNow = new Date();
        let dateNowMil = Date.now();
        let date = Date.parse("December 31, " + dateNow.getFullYear());
        let dias = dateNowMil - date;
        return "Quedan " + Math.round((dias / 86400000) * -1) + " días para año nuevo";
      };
}