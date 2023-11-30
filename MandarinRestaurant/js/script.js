function tampilkanSemuaMenu() {	
$.getJSON('MandarinRestaurant/data/pizza.json', function(data) {
	let menu = data.menu;
	$.each(menu, function(i, data) {
		$('#daftar-menu').append('<div class="col-md-4 pb-4"><div class="card"><img src="MandarinRestaurant/Img/pizza/'+data.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><h6 class="card-subtitle mb-2 text-muted">Rp. '+data.harga+'</h6><p class="card-text">'+data.deskripsi+'</p><a href="#" class="btn btn-primary">Order Now</a></div></div></div>');
	});
});
}

tampilkanSemuaMenu();

$('.nav-link').on('click', function(){
	$('.nav-link').removeClass('active');
	$(this).addClass('active');

	let kategori = $(this).html();
	$('h2').html(kategori);

	if(kategori == 'All Menu') {
		$('#daftar-menu').html('');
		tampilkanSemuaMenu();
		return;
	}

	$.getJSON('MandarinRestaurant/data/pizza.json', function(data){
		let menu = data.menu;
		let content = '';

		$.each(menu, function(i, data){
			if ( data.kategori == kategori.toLowerCase() ) {
				content += '<div class="col-md-4 pb-4"><div class="card"><img src="MandarinRestaurant/Img/pizza/'+data.gambar+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><h6 class="card-subtitle mb-2 text-muted">Rp. '+data.harga+'</h6><p class="card-text">'+data.deskripsi+'</p><a href="#" class="btn btn-primary">Order Now</a></div></div></div>';
			}
		});
		$('#daftar-menu').html(content);
	});
});