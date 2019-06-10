angular.module('myApp')
.controller('buildCtrl', function($scope,$http){

	// importar datos
	$scope.importData = function(){
		$http.get('../db/teso-db.json').success(function(data){
			$scope.myData = data;
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

	$scope.getDataStones = function(e){
		// obtengo pos del array
		switch (e.target) {
			case stn1:
				$scope.stnPos = 0;
				$('#stnli1').addClass('active');
				$('#stnli2').removeClass('active');
				$('#stnli3').removeClass('active');
				$('#stnliNext').removeClass('disabled');
				break;
			case stn2:
				$scope.stnPos = 4;
				$('#stnli1').removeClass('active');
				$('#stnli2').addClass('active');
				$('#stnli3').removeClass('active');
				$('#stnliPrev').removeClass('disabled');
				$('#stnliNext').removeClass('disabled');
				break;
			case stn3:
				$scope.stnPos = 8;
				$('#stnli1').removeClass('active');
				$('#stnli2').removeClass('active');
				$('#stnli3').addClass('active');
				$('#stnliPrev').removeClass('disabled');
				$('#stnliNext').addClass('disabled');
				break;
		};
		// obtengo datos segun pos
		$scope.stoneInfo = {
			stone1:
				{
					image: $scope.myData.stones[$scope.stnPos].image,
					title: $scope.myData.stones[$scope.stnPos].title,
					description: $scope.myData.stones[$scope.stnPos].description
				},
			stone2:
				{
					image: $scope.myData.stones[$scope.stnPos+1].image,
					title: $scope.myData.stones[$scope.stnPos+1].title,
					description: $scope.myData.stones[$scope.stnPos+1].description
				},
			stone3:
				{
					image: $scope.myData.stones[$scope.stnPos+2].image,
					title: $scope.myData.stones[$scope.stnPos+2].title,
					description: $scope.myData.stones[$scope.stnPos+2].description
				},
			stone4:
				{
					image: $scope.myData.stones[$scope.stnPos+3].image,
					title: $scope.myData.stones[$scope.stnPos+3].title,
					description: $scope.myData.stones[$scope.stnPos+3].description
				}

		};

	};

});