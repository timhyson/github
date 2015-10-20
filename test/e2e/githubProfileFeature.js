describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike01');
    searchButton.click();
    expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  });

  it('finds profiles', function() {
    searchBox.sendKeys('spike');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(1).getText()).toEqual('spike01');
  });

  it('finds the last Spike', function() {
    searchBox.sendKeys('spike');
    searchButton.click();
    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spikelynch');
  });

  // it('finds our Spike', function() {
  //   var userNames = [];
  //   var hasSpike = false;
  //   searchBox.sendKeys('spike');
  //   searchButton.click();
  //   var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
  //   // userNames.push(profiles.get(1).getText())
  //   // console.log(userNames)
  //   // console.log(profiles.last())
  //   // console.log("=============================================================");
  //   // console.log(profiles[1]);
  //   // console.log("=============================================================");
  //   for (i = 0; i < 5; i++) {
  //     // userNames.push(profiles.get(i).getText());
  //     if (profiles.get(i).getText() === 'spike01') {
  //       // console.log("=============================================================");
  //       // console.log(profiles.get(i).getText());
  //       // console.log("=============================================================");
  //       expect(profiles.get(i).getText()).toEqual('spike01');
  //       hasSpike = true;
  //     };
  //   };
  //
  //   expect(hasSpike).toEqual(true);
  // });

});
