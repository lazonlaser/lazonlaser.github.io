/**
 * [scroll description] this is support scroll
 * @type {[type]}
 */


// $(function() {

//     function scroll(i) {
//         var left = -i * 750 + 'px';
//         $("#show-document-scroll").css('left', left);
//         if (i == 2) {
//             $("#show-img").css('display', 'block');

//         } else {
//             $("#show-img").css('display', 'none');

//         }
//     }

//     $("#doc-list-btn li").click(function(event) {
//         var index = $(this).index();
//         $("#doc-list-btn li").children().removeClass('active');
//         $("#doc-list-btn li").eq(index).children().addClass('active');
//         scroll(index);
//     });


// });

$(function(){
	$(".support").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(".support-list").css('display', 'block');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(".support-list").css('display', 'none');

	});
});