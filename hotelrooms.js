var hotel = {
	name: "CareerDevs JavaScript Hotel",
	rating: 5.0,
	roomRate: 325,
	roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
	roomNumbersBooked: [],
	roomType: "Queen",

	numberOfRoomsAvailable: function() {
		//length of the number of rooms available, returned as an integer (1, 5, 20, etc)
		return this.roomNumbersAvailable.length;
	},

	numberOfRoomsBooked: function() {
		return this.roomNumbersBooked.length;
	},

	numberOfRooms: function() {
		//availa rooms plus booked rooms
		return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
	},

	updateAvailableRoomsList: function() {



		//update the drop down list of available
		var selectRoomList = "<form> <select id='selectedRoom'>";
		for (var i = 0; i < this.roomNumbersAvailable.length; i++) {


			selectRoomList += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
		}
		selectRoomList += "</select> </form>";
		document.getElementById("selectARoom").innerHTML = selectRoomList;

		//end of drop down update
		var roomsListed = "<form> <select id='bookedRoom'>";
		for (var i = 0; i < this.roomNumbersBooked.length; i++) {
			roomsListed += "<option value=" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
			
		}
		roomsListed += "</select> </form>";
		document.getElementById("rmBooked").innerHTML = roomsListed;
		//update the drop down list of booked
      



	},


	bookRoom: function() {
		//only book a room if one+ is available

		if (this.numberOfRoomsAvailable() > 0) {
			//select a random available room
			//var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
			var selectedRoomDD = document.getElementById("selectedRoom").value;
			// alert("Room "+selectedRoomDD+" has been booked.")

			this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));

			//update the drop down list of available
			this.updateAvailableRoomsList()
		
			
		}
	},
	unbookRoom: function() {
		if (this.numberOfRoomsBooked() > 0) {

			var selectedRoomBooked = document.getElementById("bookedRoom").value;
			this.roomNumbersAvailable = this.roomNumbersAvailable.concat(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(selectedRoomBooked), 1));

			//update the drop down list of available
			var selectRoomList = "<form> <select id='selectedRoom'>";
			for (var i = 0; i < this.roomNumbersAvailable.length; i++) {


				selectRoomList += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
			}
			selectRoomList += "</select> </form>";
			document.getElementById("selectARoom").innerHTML = selectRoomList;

			//end of drop down update
			var roomsListed = "<form> <select id='bookedRoom'>";
			for (var i = 0; i < this.roomNumbersBooked.length; i++) {
				roomsListed += "<option value=" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
			}
			roomsListed += "</select> </form>";
			document.getElementById("rmBooked").innerHTML = roomsListed;
			//update the drop down list of booked
		}
	}

};

document.getElementById("hotelName").innerText = hotel.name;

//create initial drop down list

var selectRoomList = "<form> <select id='selectedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {
	//need to escape certain quotes on the following line.  Should research "escaping characters and quotes"

	selectRoomList += "<option value=" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
}
selectRoomList += "</select> </form>";
document.getElementById("selectARoom").innerHTML = selectRoomList;