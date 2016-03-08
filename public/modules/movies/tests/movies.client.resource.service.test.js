(function () {

    "use strict";

    describe('testing $resource service', function () {

        it('should get the rigth movie', function () {

            var theMovie = "El Padrino";

            var myData = "El Padrino";

            expect(myData).toEqual(theMovie);

        })

    })


}());