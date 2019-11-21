Cypress.Commands.add('openAppWithCorrectData', (hotelInfoData = 'fixture:hotelInfo',HotelListData= 'fixture:hotelList') => {
    cy.server()
    cy.route('http://localhost:8888/api/hotels/venetian', hotelInfoData)
    cy.route('http://localhost:8888/api/hotels/', HotelListData)
    cy.visit('/', {
        onBeforeLoad (win) {
            delete win.fetch
        },
    })
})
