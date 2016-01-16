function messagesHandler(a){$("#timeline-container-force-position").timelineMe({items:a})}function loadMessages(){$.getScript("http://project.initiumlab.com/twelec-msg/messages.js").done(function(){console.log("Messages loaded")}).fail(function(a,b,c){console.log(c)})}function presidentialHandler(a){var b=13354305,c=[];$.each(a,function(a,b){c.push(b.P1)});var d=c.shift(),e=c.shift(),f=c.shift(),g=d+e+f;g>b&&(b=g);var h=b-g;0>h&&(h=0);$(".overlap").attr("data-number",b),$(".zhu").attr("data-number",d),$(".zhu1").text(d),$(".cai").attr("data-number",e),$(".cai1").text(e),$(".song").attr("data-number",f),$(".song1").text(f),$(".rest").attr("data-number",h),$(".percent").text(g),$(".chart").horizBarChart({selector:".bar",speed:1e3}),$(".chart2").horizBarChart({selector:".bar",speed:1e3})}function loadPresidentialVotes(){$.getScript("http://project.initiumlab.com/twelec-data/poverall.jsonp").done(function(){console.log("Presidential votes loaded")}).fail(function(a,b,c){console.log(c)})}function partySharesHandler(a){partyShares=a,topoLayer.eachLayer(updateLayer)}function loadPartyShares(){$.getScript("http://project.initiumlab.com/twelec-msg/legislators-dist.js").done(function(){console.log("Party shares loaded")}).fail(function(a,b,c){console.log(c)})}function partyVotesHandler(a){$.each(a.ratio,function(a,b){var c=parseInt(a)+1;document.getElementById("party-"+c)instanceof Object&&$("#party-"+c).text(b)})}function loadPartyVotes(){$.getScript("http://project.initiumlab.com/twelec-data/party-votes.jsonp").done(function(){console.log("Party votes loaded")}).fail(function(a,b,c){console.log(c)})}function updateLayer(a){partyShares&&$.each(partyShares,function(b,c){var d=a.feature.properties.COUNTYSN.slice(0,5);if(b==d){{c[0],c[1],c[2],c[3]}console.log("test: "+c[3])}});{var b=Math.random();colorScale(b).hex()}a.setStyle({fillColor:"#d6e8e7",fillOpacity:.8,color:"#d6e8e7",weight:1,opacity:1}),a.on({mouseover:function(){this.feature.properties.name;this.bringToFront(),this.setStyle({fillOpacity:1,weight:4,color:"#ffce00",opacity:1}),info.update(a.feature.properties)},mouseout:function(){this.bringToBack(),this.setStyle({fillOpacity:.8,weight:1,color:"#d6e8e7",opacity:.5})}})}function presidential_handler(a){console.log(a)}!function(a){"use strict";a.fn.horizBarChart=function(b){var c=a.extend({selector:".bar",speed:3e3},b);return this.each(function(){console.log("bar chart loaded");var b=0;a(this).find(a(c.selector)).each(function(){var c=parseInt(a(this).attr("data-number"));c>b&&(b=c)}),a(this).find(a(c.selector)).each(function(){console.log();var d=a(this),e=d.attr("data-number"),f=Math.round(e/b*100)+"%";a(this).animate({width:f},c.speed),a(this).next(".number").animate({left:f},c.speed)})})}}(jQuery),loadMessages(),setInterval(function(){$("#screen").empty(),$("#screen").html('<div id="timeline-container-force-position" type="text"></div>'),loadMessages()},15e3),loadPresidentialVotes(),setInterval(function(){loadPresidentialVotes()},15e3),$(document).ready(function(){$(".chart").horizBarChart({selector:".bar",speed:1e3})}),L.TopoJSON=L.GeoJSON.extend({addData:function(a){if("Topology"===a.type)for(var b in a.objects){var c=topojson.feature(a,a.objects[b]);L.GeoJSON.prototype.addData.call(this,c)}else L.GeoJSON.prototype.addData.call(this,a)}});var map=L.map("map",{center:[23.65,120.7],zoom:7.5,minZoom:7.5,maxZoom:7.5,dragging:!1,touchZoom:!1,tap:!1,doubleClickZoom:!1,scrollWheelZoom:!1}),island=L.map("island",{center:[24.48,118.35],zoom:8,minZoom:8,maxZoom:8,dragging:!1,touchZoom:!1,tap:!1,doubleClickZoom:!1,scrollWheelZoom:!1}),island2=L.map("island2",{center:[26.23,119.95],zoom:8.5,minZoom:8.5,maxZoom:8.5,dragging:!1,touchZoom:!1,tap:!1,doubleClickZoom:!1,scrollWheelZoom:!1}),topoLayer=new L.TopoJSON,partyShares;loadPartyShares(),setInterval(function(){loadPartyShares()},15e3);var info=L.control();info.onAdd=function(){return this._div=L.DomUtil.create("div","info"),this.update(),this._div},info.update=function(a){var b=this;if("undefined"!=typeof a){var c=a.COUNTYSN.slice(0,5);$.each(partyShares,function(d,e){if(d===c){var f=e[0],g=e[1],h=e[2],i=e[3];b._div.innerHTML="<h4>區域立委票選結果</h4>"+(a?"<b>"+a.name+"</b><br/>國民黨席次："+f+"<br/>民進黨席次："+g+"<br>其它政黨席次："+h+"<br>計票中席次："+(i-f-g-h):"请将鼠标置于不同县市")}})}else b._div.innerHTML="輕觸地圖查看區域立委票選結果"},info.addTo(map),loadPartyVotes(),setInterval(function(){loadPartyVotes()},15e3);var topoLayer2=new L.TopoJSON,topoLayer3=new L.TopoJSON;topoLayer.addData(mapData),topoLayer2.addData(mapData),topoLayer3.addData(mapData),topoLayer.addTo(map),topoLayer2.addTo(island),topoLayer3.addTo(island2);var colorScale=chroma.scale(["#D5E3FF","#003171"]).domain([0,1]);topoLayer.eachLayer(updateLayer),topoLayer2.eachLayer(function(a){var b=Math.random(),c=colorScale(b).hex();a.setStyle({fillColor:c,fillOpacity:.8,color:"#d6e8e7",weight:1,opacity:1}),a.on({mouseover:function(){this.feature.properties.name;this.bringToFront(),this.setStyle({fillOpacity:1,weight:4,color:"#ffce00",opacity:1}),info.update(a.feature.properties)},mouseout:function(){this.bringToBack(),this.setStyle({fillOpacity:.8,weight:1,color:"#d6e8e7",opacity:.5})}})}),topoLayer3.eachLayer(function(a){var b=Math.random(),c=colorScale(b).hex();a.setStyle({fillColor:c,fillOpacity:.8,color:"#d6e8e7",weight:1,opacity:1}),a.on({mouseover:function(){this.feature.properties.name;this.bringToFront(),this.setStyle({fillOpacity:1,weight:4,color:"#ffce00",opacity:1}),info.update(a.feature.properties)},mouseout:function(){this.bringToBack(),this.setStyle({fillOpacity:.8,weight:1,color:"#d6e8e7",opacity:.5})}})});