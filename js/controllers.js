angular.module('myApp')
.controller('buildCtrl', function($scope,$http){

	// importar datos
	$scope.importData = function(){
		$http.get('../db/teso-db.json').success(function(data){
			$scope.myData = data;
			$scope.myDataMaps = $scope.myData.maps.aldmeri;
			$scope.getDataBuild($scope.myData.magicka[0]);
			$scope.getDataVideo($scope.myData.videos[0]);
		});
	};

	if (!dataImported) {
		$scope.importData();
		dataImported = true;
		$scope.videoHide = true;
	};

	$scope.getDataBuild = function(e){
		$scope.dataBuild = {	
			id: e.id,
			build: e.build,
			url: e.url,
			character:
				{
					magicka: e.character.magicka,
					health: e.character.health,
					stamina: e.character.stamina
				},
			equipment:
				{
					mainHand: e.equipment.mainHand,
					offHand: e.equipment.offHand,
					mainHandBackup: e.equipment.mainHandBackup,
					offHandBackup: e.equipment.offHandBackup,
					head: e.equipment.head,
					chest: e.equipment.chest,
					shoulders: e.equipment.shoulders,
					waist: e.equipment.waist,
					hands: e.equipment.hands,
					legs: e.equipment.legs,
					feet: e.equipment.feet,
					neck: e.equipment.neck,
					ring1: e.equipment.ring1,
					ring2: e.equipment.ring2
				},
			skills:
				{
					abilityBar1:
						{
							ability1: e.skills.abilityBar1.ability1,
							ability2: e.skills.abilityBar1.ability2,
							ability3: e.skills.abilityBar1.ability3,
							ability4: e.skills.abilityBar1.ability4,
							ability5: e.skills.abilityBar1.ability5,
							ultimate: e.skills.abilityBar1.ultimate
						},
					abilityBar2:
						{
							ability1: e.skills.abilityBar2.ability1,
							ability2: e.skills.abilityBar2.ability2,
							ability3: e.skills.abilityBar2.ability3,
							ability4: e.skills.abilityBar2.ability4,
							ability5: e.skills.abilityBar2.ability5,
							ultimate: e.skills.abilityBar2.ultimate
						}
				}
		};
		$scope.videoHide = false;
	}; // getDataBuild

	$scope.getDataVideo = function(e){
		$scope.dataVideo = {
			id: e.id,
			title: e.title,
			description: e.description,
			url: e.url
		};
		$scope.videoHide = false;
	}; // getDataVideo

	$scope.mdStone = function(e){
		switch (e.target) {
			case stone0:
				$scope.mdMapA = $scope.myData.stones[0].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[0].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[0].map.ebonheart;
				break;
			case stone1:
				$scope.mdMapA = $scope.myData.stones[1].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[1].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[1].map.ebonheart;
				break;
			case stone2:
				$scope.mdMapA = $scope.myData.stones[2].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[2].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[2].map.ebonheart;
				break;
			case stone3:
				$scope.mdMapA = $scope.myData.stones[3].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[3].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[3].map.ebonheart;
				break;
			case stone4:
				$scope.mdMapA = $scope.myData.stones[4].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[4].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[4].map.ebonheart;
				break;
			case stone5:
				$scope.mdMapA = $scope.myData.stones[5].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[5].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[5].map.ebonheart;
				break;
			case stone6:
				$scope.mdMapA = $scope.myData.stones[6].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[6].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[6].map.ebonheart;
				break;
			case stone7:
				$scope.mdMapA = $scope.myData.stones[7].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[7].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[7].map.ebonheart;
				break;
			case stone8:
				$scope.mdMapA = $scope.myData.stones[8].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[8].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[8].map.ebonheart;
				break;
			case stone9:
				$scope.mdMapA = $scope.myData.stones[9].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[9].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[9].map.ebonheart;
				break;
			case stone10:
				$scope.mdMapA = $scope.myData.stones[10].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[10].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[10].map.ebonheart;;
				break;
			case stone11:
				$scope.mdMapA = $scope.myData.stones[11].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[11].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[11].map.ebonheart;;
				break;
			case stone12:
				$scope.mdMapA = $scope.myData.stones[12].map.aldmeri;
				$scope.mdMapD = $scope.myData.stones[12].map.daggerfall;
				$scope.mdMapE = $scope.myData.stones[12].map.ebonheart;;
				break;	
		};
	}; // mdStone

	$scope.getDataMaps = function(e){
		switch (e.target) {
			case btnAD:
				$scope.myDataMaps = $scope.myData.maps.aldmeri;
				break;
			case btnDC:
				$scope.myDataMaps = $scope.myData.maps.daggerfall;
				break;
			case btnEP:
				$scope.myDataMaps = $scope.myData.maps.ebonheart;
				break;
			case btnT:
				$scope.myDataMaps = $scope.myData.maps.tamriel;
				break;
		};
	}; // getDataMaps 

	$scope.getMap = function(e){
		$scope.mdTitle = e.title;
		$scope.mdMap = e.url;
	}; // getMap

});