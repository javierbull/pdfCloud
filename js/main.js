// "use strict";

$(document).ready(function() {

  $('.all').on('click', function(e) {
    $this = this;
    $.each($(this).parents('ul').find('input'), function(i, item) {
      $(item).prop('checked', $this.checked);
    });
  });

  $(".select2").select2({
    theme: 'bootstrap4',
  });

  $(".select2-multiple").select2({
    theme: 'bootstrap4',
  });

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

  $("#radioShow").click(function() {
    $(".form-plazos").show();
  });

  $("#radioHide").click(function() {
    $(".form-plazos").hide();
  });



  // DATE PICKER =======================

  try {

    moment.locale('es');

    $(document).ready(function() {
      $('.timepicker').timepicker();
    });

    $('.js-datepicker-simple').daterangepicker({
      "singleDatePicker": true,
      locale: {
        format: 'DD/MM/YYYY',
        currentText: 'Hoy',
        weekHeader: 'Sm',
      },
    });

    $('.js-datepicker').daterangepicker({
      "singleDatePicker": true,
      "showDropdowns": true,
      "autoUpdateInput": false,
      locale: {
        format: 'DD/MM/YYYY',
        currentText: 'Hoy',
        weekHeader: 'Sm',
      },
    });



    var myCalendar = $('.js-datepicker');
    var isClick = 0;

    $(window).on('click', function() {
      isClick = 0;
    });

    $(myCalendar).on('apply.daterangepicker', function(ev, picker) {
      isClick = 0;
      $(this).val(picker.startDate.format('DD/MM/YYYY'));

    });

    $('.js-btn-calendar').on('click', function(e) {
      e.stopPropagation();

      if (isClick === 1) isClick = 0;
      else if (isClick === 0) isClick = 1;

      if (isClick === 1) {
        myCalendar.focus();
      }
    });

    $(myCalendar).on('click', function(e) {
      e.stopPropagation();
      isClick = 1;
    });

    $('.daterangepicker').on('click', function(e) {
      e.stopPropagation();
    });


  } catch (er) {
    console.log(er);
  }


  // FIN DATE PICKER

  // DATE RANGE PICKER
  // $('#date_range').daterangepicker();

  $('.rangePicker').daterangepicker({
    "locale": {
      "format": "DD-MM-YYYY",
      "separator": " - ",
      "applyLabel": "Guardar",
      "cancelLabel": "Cancelar",
      "fromLabel": "Desde",
      "toLabel": "Hasta",
      "customRangeLabel": "Personalizar",
      "daysOfWeek": [
        "Do",
        "Lu",
        "Ma",
        "Mi",
        "Ju",
        "Vi",
        "Sa"
      ],
      "monthNames": [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Setiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      "firstDay": 1
    },
    "opens": "right"
  });
  // RANGE DATE PICKER



  $(".nav-search .input-group > input").focus(function(e) {
    $(this).parent().addClass("focus");
  }).blur(function(e) {
    $(this).parent().removeClass("focus");
  });

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    layoutsColors();
  });

  function layoutsColors() {
    if ($('.sidebar').is('[data-background-color]')) {
      $('html').addClass('sidebar-color');
    } else {
      $('html').removeClass('sidebar-color');
    }

    if ($('body').is('[data-image]')) {
      $('body').css('background-image', 'url("' + $('body').attr('data-image') + '")');
    } else {
      $('body').css('background-image', '');
    }
  }

  $('.btn-refresh-card').on('click', function() {
    var e = $(this).parents(".card");
    e.length && (e.addClass("is-loading"), setTimeout(function() {
      e.removeClass("is-loading")
    }, 3e3))
  })

  var scrollbarDashboard = $('.sidebar .scrollbar');
  if (scrollbarDashboard.length > 0) {
    scrollbarDashboard.scrollbar();
  }

  var contentScrollbar = $('.main-panel .content-scroll');
  if (contentScrollbar.length > 0) {
    contentScrollbar.scrollbar();
  }

  var messagesScrollbar = $('.messages-scroll');
  if (messagesScrollbar.length > 0) {
    messagesScrollbar.scrollbar();
  }

  var tasksScrollbar = $('.tasks-scroll');
  if (tasksScrollbar.length > 0) {
    tasksScrollbar.scrollbar();
  }

  var quickScrollbar = $('.quick-scroll');
  if (quickScrollbar.length > 0) {
    quickScrollbar.scrollbar();
  }

  var messageNotifScrollbar = $('.message-notif-scroll');
  if (messageNotifScrollbar.length > 0) {
    messageNotifScrollbar.scrollbar();
  }

  var notifScrollbar = $('.notif-scroll');
  if (notifScrollbar.length > 0) {
    notifScrollbar.scrollbar();
  }

  var quickActionsScrollbar = $('.quick-actions-scroll');
  if (quickActionsScrollbar.length > 0) {
    quickActionsScrollbar.scrollbar();
  }

  var userScrollbar = $('.dropdown-user-scroll');
  if (userScrollbar.length > 0) {
    userScrollbar.scrollbar();
  }

  $('.scroll-bar').draggable();

  $('#search-nav').on('shown.bs.collapse', function() {
    $('.nav-search .form-control').focus();
  });

  var toggle_sidebar = false,
    toggle_quick_sidebar = false,
    toggle_topbar = false,
    minimize_sidebar = false,
    toggle_page_sidebar = false,
    toggle_overlay_sidebar = false,
    nav_open = 0,
    quick_sidebar_open = 0,
    topbar_open = 0,
    mini_sidebar = 0,
    page_sidebar_open = 0,
    overlay_sidebar_open = 0;


  if (!toggle_sidebar) {
    var toggle = $('.sidenav-toggler');

    toggle.on('click', function() {
      if (nav_open == 1) {
        $('html').removeClass('nav_open');
        toggle.removeClass('toggled');
        nav_open = 0;
      } else {
        $('html').addClass('nav_open');
        toggle.addClass('toggled');
        nav_open = 1;
      }
    });
    toggle_sidebar = true;
  }

  if (!quick_sidebar_open) {
    var toggle = $('.quick-sidebar-toggler');

    toggle.on('click', function() {
      if (nav_open == 1) {
        $('html').removeClass('quick_sidebar_open');
        $('.quick-sidebar-overlay').remove();
        toggle.removeClass('toggled');
        quick_sidebar_open = 0;
      } else {
        $('html').addClass('quick_sidebar_open');
        toggle.addClass('toggled');
        $('<div class="quick-sidebar-overlay"></div>').insertAfter('.quick-sidebar');
        quick_sidebar_open = 1;
      }
    });

    $('.wrapper').mouseup(function(e) {
      var subject = $('.quick-sidebar');

      if (e.target.className != subject.attr('class') && !subject.has(e.target).length) {
        $('html').removeClass('quick_sidebar_open');
        $('.quick-sidebar-toggler').removeClass('toggled');
        $('.quick-sidebar-overlay').remove();
        quick_sidebar_open = 0;
      }
    });

    $(".close-quick-sidebar").on('click', function() {
      $('html').removeClass('quick_sidebar_open');
      $('.quick-sidebar-toggler').removeClass('toggled');
      $('.quick-sidebar-overlay').remove();
      quick_sidebar_open = 0;
    });

    quick_sidebar_open = true;
  }

  if (!toggle_topbar) {
    var topbar = $('.topbar-toggler');

    topbar.on('click', function() {
      if (topbar_open == 1) {
        $('html').removeClass('topbar_open');
        topbar.removeClass('toggled');
        topbar_open = 0;
      } else {
        $('html').addClass('topbar_open');
        topbar.addClass('toggled');
        topbar_open = 1;
      }
    });
    toggle_topbar = true;
  }

  if (!minimize_sidebar) {
    var minibutton = $('.toggle-sidebar');
    if ($('.wrapper').hasClass('sidebar_minimize')) {
      mini_sidebar = 1;
      minibutton.addClass('toggled');
      minibutton.html('<i class="icon-menu"></i>');
    }

    minibutton.on('click', function() {
      if (mini_sidebar == 1) {
        $('.wrapper').removeClass('sidebar_minimize');
        minibutton.removeClass('toggled');
        minibutton.html('<i class="icon-menu"></i>');
        mini_sidebar = 0;
      } else {
        $('.wrapper').addClass('sidebar_minimize');
        minibutton.addClass('toggled');
        minibutton.html('<i class="icon-menu"></i>');
        mini_sidebar = 1;
      }
      $(window).resize();
    });
    minimize_sidebar = true;
  }

  if (!toggle_page_sidebar) {
    var pageSidebarToggler = $('.page-sidebar-toggler');

    pageSidebarToggler.on('click', function() {
      if (page_sidebar_open == 1) {
        $('html').removeClass('pagesidebar_open');
        pageSidebarToggler.removeClass('toggled');
        page_sidebar_open = 0;
      } else {
        $('html').addClass('pagesidebar_open');
        pageSidebarToggler.addClass('toggled');
        page_sidebar_open = 1;
      }
    });

    var pageSidebarClose = $('.page-sidebar .back');

    pageSidebarClose.on('click', function() {
      $('html').removeClass('pagesidebar_open');
      pageSidebarToggler.removeClass('toggled');
      page_sidebar_open = 0;
    });

    toggle_page_sidebar = true;
  }

  if (!toggle_overlay_sidebar) {
    var overlaybutton = $('.sidenav-overlay-toggler');
    if ($('.wrapper').hasClass('is-show')) {
      overlay_sidebar_open = 1;
      overlaybutton.addClass('toggled');
      overlaybutton.html('<i class="icon-menu"></i>');
    }

    overlaybutton.on('click', function() {
      if (overlay_sidebar_open == 1) {
        $('.wrapper').removeClass('is-show');
        overlaybutton.removeClass('toggled');
        overlaybutton.html('<i class="icon-menu"></i>');
        overlay_sidebar_open = 0;
      } else {
        $('.wrapper').addClass('is-show');
        overlaybutton.addClass('toggled');
        overlaybutton.html('<i class="icon-menu"></i>');
        overlay_sidebar_open = 1;
      }
      $(window).resize();
    });
    minimize_sidebar = true;
  }

  $('.sidebar').hover(function() {
    if ($('.wrapper').hasClass('sidebar_minimize')) {
      $('.wrapper').addClass('sidebar_minimize_hover');
    }
  }, function() {
    if ($('.wrapper').hasClass('sidebar_minimize')) {
      $('.wrapper').removeClass('sidebar_minimize_hover');
    }
  });

  // addClass if nav-item click and has subnav

  $(".nav-item a").on('click', (function() {
    if ($(this).parent().find('.collapse').hasClass("show")) {
      $(this).parent().removeClass('submenu');
    } else {
      $(this).parent().addClass('submenu');
    }
  }));

  //form-group-default active if input focus
  $(".form-group-default .form-control").focus(function() {
    $(this).parent().addClass("active");
  }).blur(function() {
    $(this).parent().removeClass("active");
  });

  // SHOW ACTIVE FOCUS TABLE ROW
  // $('.row-table').on('click', function() {
  //   $('.row-table').removeClass('active2');
  //   $(this).toggleClass('active2');
  // })

  // DATATABLES
  $('.dtable').DataTable({
    // "scrollX": true,
    //para cambiar el lenguaje a español
    "language": {
      "lengthMenu": "Mostrar _MENU_ filas",
      "zeroRecords": "No se encontraron resultados",
      "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "infoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sSearch": "Buscar:",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "sProcessing": "Procesando...",
    }

  });

  // FIN DATATABLES

  // ACCORDION MODAL

  // SELECT ALL CHECKBOXES

  // add multiple select/unselect functionality
$(".selectall").on("click", function() {
  $(".case").prop("checked", this.checked);
});

// if all checkbox are selected, check the selectall checkbox and viceversa
$(".case").on("click", function() {
  if ($(".case").length == $(".case:checked").length) {
    $(".selectall").prop("checked", true);
  } else {
    $(".selectall").prop("checked", false);
  }
});

  // FIN SELECT ALL CHECKBOXES

  $(function() {
    $('.card-header').click(function(e) {
      $('.card-header').removeClass('tab-bg-gold');
      var collapsCrnt = $(this).find('.collapse-controle').attr('aria-expanded');
      if (collapsCrnt != 'true') {
        $(this).addClass('tab-bg-gold');
      }
    });
  })
  // FIN ACCORDION MODAL


  // CUSTOM FILE INPUT
  // Add the following code if you want the name of the file appear on select
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });
  // FIN CUSTOM FILE INPUT

  // SHOW - HIDE CONTENEDORES
  $("#btn-agregarSede").click(function() {
    $("#empresa").hide();
    $("#sede").show();
  });

  $("#volverEmpresa").click(function() {
    $("#sede").hide();
    $("#empresa").show();
  });

  $("#btn-nuevaProgramacion").click(function() {
    $("#programaciones").hide();
    $("#nueva-programacion").show();
  });

  $(".volverProgramaciones").click(function() {
    $("#nueva-programacion").hide();
    $("#programaciones").show();
    $("#detalle-programacion-activo").hide();
    $("#detalle-programacion-inactivo").hide();
  });

  $(".btn-detalleProgramacion-activo").click(function() {
    $("#programaciones").hide();
    $("#detalle-programacion-activo").show();
  });

  $(".btn-detalleProgramacion-inactivo").click(function() {
    $("#programaciones").hide();
    $("#detalle-programacion-inactivo").show();
  });

  $(".nuevaProgramacionInHouse").click(function() {
    $("#programacionesInHouse").hide();
    $("#nueva-programacionInHouse").show();
  });

  $(".volverProgramacionesInHouse").click(function() {
    $("#nueva-programacionInHouse").hide();
    $("#programacionesInHouse").show();
    $("#detalle-programacionInHouse-confirmado").hide();
    $("#detalle-programacionInHouse-porConfirmar").hide();
    $("#detalle-programacionInHouse-cerrado").hide();
    $("#detalle-programacionInHouse-activo").hide();
    $("#detalle-programacionInHouse-cancelado").hide();
  });

  $(".btn-detalleProgramacionInHouse-porConfirmar").click(function() {
    $("#programacionesInHouse").hide();
    $("#detalle-programacionInHouse-porConfirmar").show();
  });

  $(".btn-detalleProgramacionInHouse-confirmado").click(function() {
    $("#programacionesInHouse").hide();
    $("#detalle-programacionInHouse-confirmado").show();
  });

  $(".btn-detalleProgramacionInHouse-cerrado").click(function() {
    $("#programacionesInHouse").hide();
    $("#detalle-programacionInHouse-cerrado").show();
  });

  $(".btn-detalleProgramacionInHouse-activo").click(function() {
    $("#programacionesInHouse").hide();
    $("#detalle-programacionInHouse-activo").show();
  });

  $(".btn-detalleProgramacionInHouse-cancelado").click(function() {
    $("#programacionesInHouse").hide();
    $("#detalle-programacionInHouse-cancelado").show();
  });

  $(".volverProgramacionesInHousePromotoria").click(function() {
    $("#promotoria-inHouse").show();
    $("#detalle-programacionInHousePromotoria-confirmado").hide();
    $("#detalle-programacionInHousePromotoria-porConfirmar").hide();
    $("#detalle-programacionInHousePromotoria-cerrado").hide();
    $("#detalle-programacionInHousePromotoria-activo").hide();
    $("#detalle-programacionInHousePromotoria-cancelado").hide();
    $("#detalle-programacionInHousePromotoria-finalizado").hide();
  });

  $(".btn-detalleProgramacionInHousePromotoria-confirmado").click(function() {
    $("#promotoria-inHouse").hide();
    $("#detalle-programacionInHousePromotoria-confirmado").show();
  });

  $(".btn-detalleProgramacionInHousePromotoria-porConfirmar").click(function() {
    $("#promotoria-inHouse").hide();
    $("#detalle-programacionInHousePromotoria-porConfirmar").show();
  });

  $(".btn-detalleProgramacionInHousePromotoria-cerrado").click(function() {
    $("#promotoria-inHouse").hide();
    $("#detalle-programacionInHousePromotoria-cerrado").show();
  });

  $(".btn-detalleProgramacionInHousePromotoria-activo").click(function() {
    $("#promotoria-inHouse").hide();
    $("#detalle-programacionInHousePromotoria-activo").show();
  });

  $(".btn-detalleProgramacionInHousePromotoria-cancelado").click(function() {
    $("#promotoria-inHouse").hide();
    $("#detalle-programacionInHousePromotoria-cancelado").show();
  });

  $(".btn-detalleProgramacionInHousePromotoria-finalizado").click(function() {
    $("#promotoria-inHouse").hide();
    $("#detalle-programacionInHousePromotoria-finalizado").show();
  });

  // MÓDULO PRODUCTOS

  $(".volverProductos").click(function() {
    $("#productos").show();
    $("#detalle-producto-opcAsociadas-activo").hide();
    $("#detalle-producto-opcDescriptivas-activo").hide();
    $("#detalle-producto-individual-inactivo").hide();
    $("#detalle-producto-pack-activo").hide();
  });

  $("#btn-productoOpcAsociadas-activo").click(function() {
    $("#productos").hide();
    $("#detalle-producto-opcAsociadas-activo").show();
  });

  $("#btn-productoOpcDescriptivas-activo").click(function() {
    $("#productos").hide();
    $("#detalle-producto-opcDescriptivas-activo").show();
  });

  $("#btn-productoIndividual-inactivo").click(function() {
    $("#productos").hide();
    $("#detalle-producto-individual-inactivo").show();
  });

  $("#btn-productoPack-activo").click(function() {
    $("#productos").hide();
    $("#detalle-producto-pack-activo").show();
  });

  // MÓDULO EMPRESAS

  $(".volverEmpresas").click(function() {
    $("#empresa").show();
    $("#agregar-empresa").hide();
    $("#empresa-activo").hide();
  });

  $("#btn-agregarEmpresa").click(function() {
    $("#empresa").hide();
    $("#agregar-empresa").show();
  });

  $("#btn-detalleEmpresa-activo").click(function() {
    $("#empresa").hide();
    $("#empresa-activo").show();
  });

  // MÓDULO ENVIO DE CORREOS

  $(".volverCorreosEnviados").click(function() {
    $("#content-enviarCorreos").hide();
    $("#correos").show();
  });

  $("#btn-enviarCorreo").click(function() {
    $("#correos").hide();
    $("#content-enviarCorreos").show();
  });

  // dropdown show hide option
  $('.drop-down-show-hide').hide();

  $('#inputMetodoCorreo').change(function () {
      $('.drop-down-show-hide').hide();
      $('#' + this.value).show();
  });
    // end dropdown show hide option
  // FIN MODULOD E CORREOS

  // SHOW ACTIVE FOCUS STEPPER
  // $('.step').on('click', function() {
  //   $('.step').removeClass('activeStep');
  //   $(this).toggleClass('activeStep');
  // })

  // Stepper Producto opciones asociadas
  $(".step1-opcAsociadas").click(function() {
    $("#content-step1-opcAsociadas").show();
    $("#content-step2-opcAsociadas").hide();
    $("#content-step3-opcAsociadas").hide();
  });

  $(".step2-opcAsociadas").click(function() {
    $("#content-step2-opcAsociadas").show();
    $("#content-step1-opcAsociadas").hide();
    $("#content-step3-opcAsociadas").hide();
  });

  $(".step3-opcAsociadas").click(function() {
    $("#content-step3-opcAsociadas").show();
    $("#content-step1-opcAsociadas").hide();
    $("#content-step2-opcAsociadas").hide();
  });

  // Stepper Producto opciones descriptivas

  $(".step1-opcDescriptivas").click(function() {
    $("#content-step1-opcDescriptivas").show();
    $("#content-step2-opcDescriptivas").hide();
    $("#content-step3-opcDescriptivas").hide();
  });

  $(".step2-opcDescriptivas").click(function() {
    $("#content-step2-opcDescriptivas").show();
    $("#content-step1-opcDescriptivas").hide();
    $("#content-step3-opcDescriptivas").hide();
  });

  $(".step3-opcDescriptivas").click(function() {
    $("#content-step3-opcDescriptivas").show();
    $("#content-step1-opcDescriptivas").hide();
    $("#content-step2-opcDescriptivas").hide();
  });

  // Stepper Producto opciones pack

  $(".step1-pack").click(function() {
    $("#content-step1-pack").show();
    $("#content-step2-pack").hide();
    $("#content-step3-pack").hide();
  });

  $(".step2-pack").click(function() {
    $("#content-step2-pack").show();
    $("#content-step1-pack").hide();
    $("#content-step3-pack").hide();
  });

  $(".step3-pack").click(function() {
    $("#content-step3-pack").show();
    $("#content-step1-pack").hide();
    $("#content-step2-pack").hide();
  });

  // Stepper Producto individual

  $(".step1-individual").click(function() {
    $("#content-step1-individual").show();
    $("#content-step2-individual").hide();
    $("#content-step3-individual").hide();
  });

  $(".step2-individual").click(function() {
    $("#content-step2-individual").show();
    $("#content-step1-individual").hide();
    $("#content-step3-individual").hide();
  });

  $(".step3-individual").click(function() {
    $("#content-step3-individual").show();
    $("#content-step1-individual").hide();
    $("#content-step2-individual").hide();
  });
  // End Stepper Producto individual

  // Stepper Agregar Empresa
  $(".step1-agregarEmpresa").click(function() {
    $("#content-step1-agregarEmpresa").show();
    $("#content-step2-agregarEmpresa").hide();
    $("#content-step3-agregarEmpresa").hide();
  });

  $(".step2-agregarEmpresa").click(function() {
    $("#content-step2-agregarEmpresa").show();
    $("#content-step1-agregarEmpresa").hide();
    $("#content-step3-agregarEmpresa").hide();
  });

  $(".step3-agregarEmpresa").click(function() {
    $("#content-step3-agregarEmpresa").show();
    $("#content-step1-agregarEmpresa").hide();
    $("#content-step2-agregarEmpresa").hide();
  });

  // Stepper Agregar Empresa

  // Stepper Editar Empresa
  $(".step1-editarEmpresa").click(function() {
    $("#content-step1-editarEmpresa").show();
    $("#content-step2-editarEmpresa").hide();
    $("#content-step3-editarEmpresa").hide();
  });

  $(".step2-editarEmpresa").click(function() {
    $("#content-step2-editarEmpresa").show();
    $("#content-step1-editarEmpresa").hide();
    $("#content-step3-editarEmpresa").hide();
  });

  $(".step3-editarEmpresa").click(function() {
    $("#content-step3-editarEmpresa").show();
    $("#content-step1-editarEmpresa").hide();
    $("#content-step2-editarEmpresa").hide();
  });

  // Stepper Editar Empresa

  // END SHOW ACTIVE FOCUS STEPPER

  // END MODULO PRODUCTOS

  // END SHOW - HIDE CONTENEDORES

  // MÓDULO PROGRAMACIONES
  $("#radioShowProgramacion").click(function() {
    $(".content-btn-editar-productos").show();
  });

  $("#radioHideProgramacion").click(function() {
    $(".content-btn-editar-productos").hide();
  });

  $("#radioShowProgramacionEdit").click(function() {
    $(".content-btn-editar-productos-edit").show();
  });

  $("#radioHideProgramacionEdit").click(function() {
    $(".content-btn-editar-productos-edit").hide();
  });

  // Modal checkboxed anidados

  // Para evitar que se abra el accordion al dar click en el checkbox
  $(".content-checkbox").click(function() {
    event.stopPropagation();
  });

  // Fin checkboxes anidados

  // FIN MÓDULO PROGRAMACIONES

  // UPLOAD PICTURE PROFILE
   // function readURL(input) {
   //   if (input.files && input.files[0]) {
   //     var reader = new FileReader();
   //     reader.onload = function(e) {
   //       $('#imagePreviewCard').css('background-image', 'url(' + e.target.result + ')');
   //       $('#imagePreviewCard').hide();
   //       $('#imagePreviewCard').fadeIn(650);
   //     }
   //     reader.readAsDataURL(input.files[0]);
   //   }
   // }
   //
   // $("#imageUpload").change(function() {
   //   readURL(this);
   // });

   $('#imgFileCardOpcAsociadas').change(function(){
    var curElement = $('#imageCardOpcAsociadas');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

$('#imgFilePageOpcAsociadas').change(function(){
    var curElement = $('#imagePageOpcAsociadas');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});

$('#imgFilePdfOpcAsociadas').change(function(){
    var curElement = $('#imagePdfOpcAsociadas');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
});


$('#imgFileCardOpcDescriptivas').change(function(){
 var curElement = $('#imageCardOpcDescriptivas');
 console.log(curElement);
 var reader = new FileReader();

 reader.onload = function (e) {
     // get loaded data and render thumbnail.
     curElement.attr('src', e.target.result);
 };

 // read the image file as a data URL.
 reader.readAsDataURL(this.files[0]);
});

$('#imgFilePageOpcDescriptivas').change(function(){
 var curElement = $('#imagePageOpcDescriptivas');
 console.log(curElement);
 var reader = new FileReader();

 reader.onload = function (e) {
     // get loaded data and render thumbnail.
     curElement.attr('src', e.target.result);
 };

 // read the image file as a data URL.
 reader.readAsDataURL(this.files[0]);
});

$('#imgFilePdfOpcDescriptivas').change(function(){
 var curElement = $('#imagePdfOpcDescriptivas');
 console.log(curElement);
 var reader = new FileReader();

 reader.onload = function (e) {
     // get loaded data and render thumbnail.
     curElement.attr('src', e.target.result);
 };

 // read the image file as a data URL.
 reader.readAsDataURL(this.files[0]);
});
   // END UPLOAD PICTURE PROFILE

   $('#imgFileCardPack').change(function(){
    var curElement = $('#imageCardPack');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
   });

   $('#imgFilePagePack').change(function(){
    var curElement = $('#imagePagePack');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
   });

   $('#imgFilePdfPack').change(function(){
    var curElement = $('#imagePdfPack');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
   });

   $('#imgFileLogoEmpresa').change(function(){
    var curElement = $('#imageLogoEmpresa');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
   });
      // END UPLOAD PICTURE PROFILE

      $(".accordion-card-header").click(function() {
        $(".accordion-less").toggleClass("show hide");
        $(".accordion-more").toggleClass("show hide");
      });

});


// ==============================
// Tab link - Tab link - Tab link
// ==============================

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// =============================

// SIDEBAR ITEMS ACTIVE TOGGLE
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("sb-active");
    current[0].className = current[0].className.replace(" sb-active", "");
    this.className += " sb-active";
  });
};

// =====================

// Rich text editor
tinymce.init({
  selector: "richtextarea",
  plugins: "lists advlist autolink autoresize charmap code emoticons hr image insertdatetime link media paste preview searchreplace table textpattern toc visualblocks visualchars wordcount quickbars",
  toolbar: "code preview | bold italic strikethrough | numlist bullist | link emoticons",
  insertdatetime_element: true,
   media_scripts: [
   {filter: 'platform.twitter.com'},
   {filter: 's.imgur.com'},
   {filter: 'instagram.com'},
   {filter: 'https://platform.twitter.com/widgets.js'},
 ],
   browser_spellcheck: true,
   contextmenu: false,
});

// End Rich text editor

// ===================================

// Sort list

$( function() {
  $( ".sortable" ).sortable();
} );

// ===================================
