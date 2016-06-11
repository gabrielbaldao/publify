var bind_sortable = function() {
  $('.sortable').sortable({
    dropOnEmpty: true,
    stop: function(evt, ui) {
      var data = $(this).sortable('serialize', {attribute: 'data-sortable'});

      $.ajax({
        data: data,
        type: 'POST',
        dataType: 'script',
        url: '/admin/sidebar/sortable'
      }).fail(function(jqXHR, textStatus, errorThrown) { alert('Oups?'); });
    }
  });

  $('.draggable').draggable({
    connectToSortable: '.sortable',
    helper: "clone",
    revert: "invalid"
  });
};
$(document).ready(function() {
  bind_sortable();
});
