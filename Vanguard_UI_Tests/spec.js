describe('Compare Funds button should be', function () {
  it('hidden when less than 2 funds are selected', function () {
    browser.get('https://www.vanguardinvestments.com.au/au/portal/homepage.jsp');
    element(by.linkText('Individual & SMSF investors')).click();
    browser.sleep(5000);
    element(by.linkText('Fund compare')).click().then(function () {
      browser.getAllWindowHandles().then(function (handles) {
        newWindowHandle = handles[1];
        browser.switchTo().window(newWindowHandle).then(function () {
          $('#addButton0').click();
          element(by.name('F000003TOB')).click();
          browser.sleep(5000);
          expect($('#compareFundBtn').isDisplayed()).toEqual(false);
        });
      });
    });
  });
});


describe('Compare 4 investment funds', function () {
  it('should navigate to investment homepage', function () {
    browser.get('https://www.vanguardinvestments.com.au/au/portal/homepage.jsp');
  });

  it('should navigate to Individual & SMSF investors', function () {
    element(by.linkText('Individual & SMSF investors')).click();
    browser.sleep(1000);
    element(by.linkText('Fund compare')).click().then(function () {
      browser.getAllWindowHandles().then(function (handles) {
        newWindowHandle = handles[2]; // this is your new window
        browser.switchTo().window(newWindowHandle).then(function () {
          //compare 4 funds 
          browser.sleep(5000);
          $('#addButton0').click();
          element(by.name('F000003TOB')).click();
          element(by.name('F00000XDKX')).click();
          element(by.name('F00000UP02')).click();
          element(by.name('F00000OZ52')).click();
          expect($('#addFund').isDisplayed()).toEqual(false);
          $('#compareFundBtn').click();
          browser.sleep(3000);

          // Replace a fund with another one
          $('#replaceButton3').click();
          element(by.name('F0AUS05IJY')).click();
          $('#compareFundBtn').click();

          //Remove the funds and check that the compare button is hidden again
          browser.sleep(2000);
          $('#removeButton3').click();
          browser.sleep(2000);
          $('#removeButton2').click();
          browser.sleep(2000);
          $('#removeButton1').click();
          browser.sleep(2000);
          $('#addButton1').click();
          expect($('#compareFundBtn').isDisplayed()).toEqual(false);
        });
      });
    });
  });
});
