/*
 * Shared libraries allow you to write code once and reuse it in
 * multiple scripts in the Integration Builder.
 *
 * This example shows you how to create a new function named 'myFunction'
 * and add it to this shared library.
 *
 * To use this function in another script, include the following statements,
 * replacing 'My Shared Libarary' with the name of this shared library.
 *
 *  var mySharedLibrary = require('My Shared Library');
 *  var message = mySharedLibrary.myFunction();
 */

exports.convertTime = function(time12h) {
    //var convertTime = function(time12h) {
    var msg = 'Converting time';
    var time = time12h.split(' ');
    var hms = time[0];
    var ampm = time[1].toLowerCase();
    var hmsplit = hms.split(':');
    var hours = hmsplit[0];
    var minutes = hmsplit[1];
    if (hours === '12') {
      hours = '00';
    }
    if (ampm === 'pm') {
      hours = parseInt(hours, 10) + 12;
    }
    return hours + ':' + minutes;
  };
  
    exports.form = function(type) {
            //var form = function(type) {
    console.log('Creating forms');
    if (type == "High-Warning") {
      result = constants.warningForm;
    }
    if (type == "High-Critical-Warning") {
      result = constants.criticalForm;
    }
    if (type == "Null Value Warning") {
      result = constants.nullForm;
    }
    if (type == "Green Below 25% of Baseline") {
      result = constants.supergreenForm;
    }
    if (type == "Transitioned from High to Green") {
      result = constants.greenForm;
    }
    return result;
  };
  
    exports.path = function(type, form) {
            //var path = function(type, form) {
    console.log('Creating path');
    if (type == "High-Warning") {
      result = "/reapi/2015-04-01/forms/" + form + "/triggers";
    }
    if (type == "High-Critical-Warning") {
      result = "/reapi/2015-04-01/forms/" + form + "/triggers";
    }
    if (type == "Null Value Warning") {
      result = "/reapi/2015-04-01/forms/" + form + "/triggers";
    }
    if (type == "Green Below 25% of Baseline") {
      result = "/reapi/2015-04-01/forms/" + form + "/triggers";
    }
    if (type == "Transitioned from High to Green") {
      result = "/reapi/2015-04-01/forms/" + form + "/triggers";
    }
    return result;
  };
  
    exports.rec = function(metricName) {
            //var rec = function(metricName) {
    console.log('Creating recipients');
    var result = 'Qlik ' + metricName;
    return result;
  };
  
    exports.content = function(metricName, paymentArray, fioArray, tlmArray, prsArray) {
        //var content = function() {
    if (paymentArray.indexOf(metricName) > -1) {
        link = constants.paymentsDashboard;
        linkName = "Payments Dashboard";
        sourceSystem = "BAM";
    }
    if (fioArray.indexOf(metricName) > -1) {
    link = constants.fioDashboard;
    linkName = "FIO Dashboard";
    sourceSystem = "NetReveal";
    }
    if (tlmArray.indexOf(metricName) > -1) {
    link = constants.executiveSummary;
    linkName = "Reconciliations Dashboard";
    sourceSystem = "TLM";
    }
    if (prsArray.indexOf(metricName) > -1) {
    link = constants.paymentsDashboard;
    linkName = "Payments Dashboard";
    sourceSystem = "TLM";
    }
return { 'link': link,'linkName': linkName,'sourceSystem': sourceSystem};
    };
    
    exports.per = function(aValue, tValue) {
            //var per = function(aValue, tValue) {
      //var result = ((aValue - tValue) / tValue) * 100;
      var result = parseFloat(((aValue - tValue) / tValue) * 100).toFixed(2);

      if (result < 0) {
        pos = "below";
      } else if (result > 0) {
        pos = "above";
      }
      return result;
    };

    //exports.prop = function(type, metricName, aValue, tValue, linkName, link, per, pos) {
    exports.propValues = function propValues(data) {
    if (type == 'High-Warning') {
    // Return multiple values by assigning properties in an object.
    data.breachtype = "warning";
    data.breachTitle = "Warning";
    data.metricName = metricName;
    data.ActualValue = aValue;
    data.thresholdValue = tValue;
    data.linkName = linkName;
    data.link = link;
    }
    //if (type == 'Green Below 25% of Baseline') {
    //// Return multiple values by assigning properties in an object.
    //data.breachtype = "warning";
    //data.breachTitle = "Warning";
    //data.metricName = metricName;
    //data.ActualValue = aValue;
    //data.thresholdValue = tValue;
    //data.linkName = linkName;
    //data.link = link;
    //}
};