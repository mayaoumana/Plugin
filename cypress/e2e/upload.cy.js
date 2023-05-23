describe("File upload and download tests", () => {
   
  
    it("Upload Picture Filebin", () => {
      cy.visit('https://filebin.net/');
      const fileName = 'exemple.jpg'; 
      const filePath = 'exemple.jpg';
      cy.get('#fileField').attachFile({ filePath, fileName });
      cy.get(':nth-child(1) > .link-primary').invoke('text').should('eq', fileName);
    });
  

  });