// Copyright 2002-2013, University of Colorado Boulder

/**
 * Display object for the field meter.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {

  var Easel = require( 'easel' );
  var DragHandler = require( 'common/easel/DragHandler' );
  var Inheritance = require( 'common/util/Inheritance' );
  var MathUtil = require( 'common/math/MathUtil' );
  var Strings = require( 'i18n!../../nls/faraday-strings' );
  var fieldMeterImage = require( 'image!images/fieldMeter.png' );

  /**
   * @param {FieldMeter} fieldMeter
   * @param {ModelViewTransform2D} mvt
   * @constructor
   */
  function FieldMeterDisplay( fieldMeter, mvt ) {

    // constructor stealing
    Easel.Container.call( this );

    // meter body
    var meter = new Easel.Bitmap( fieldMeterImage );
    // Move registration point to the center of probe crosshairs.
    this.regX = meter.image.width / 2;
    this.regY = 28; // manually measured in image file

    // title
    var titleText = new Easel.Text( Strings.magneticField, '14px Arial', 'white' );

    // 4 values
    var VALUE_FONT = '18px Arial';
    var VALUE_COLOR = 'white';
    var magnitudeText = new Easel.Text( '?', VALUE_FONT, VALUE_COLOR );
    var xText = new Easel.Text( '?', VALUE_FONT, VALUE_COLOR );
    var yText = new Easel.Text( '?', VALUE_FONT, VALUE_COLOR );
    var angleText = new Easel.Text( '?', VALUE_FONT, VALUE_COLOR );

    // rendering order
    this.addChild( meter );
    this.addChild( titleText );
    this.addChild( magnitudeText );
    this.addChild( xText );
    this.addChild( yText );
    this.addChild( angleText );

    // layout
    titleText.textAlign = 'center';
    titleText.textBaseline = 'middle';
    titleText.x = meter.image.width / 2;
    titleText.y = 84;
    var TEXT_X = 110;
    var TEXT_ALIGN = 'right';
    var textY = 104;
    var TEXT_Y_DELTA = 23;
    magnitudeText.x = TEXT_X;
    magnitudeText.y = textY;
    magnitudeText.textAlign = TEXT_ALIGN;
    textY += TEXT_Y_DELTA;
    xText.x = TEXT_X;
    xText.y = textY;
    xText.textAlign = TEXT_ALIGN;
    textY += TEXT_Y_DELTA;
    yText.x = TEXT_X;
    yText.y = textY;
    yText.textAlign = TEXT_ALIGN;
    textY += TEXT_Y_DELTA;
    angleText.x = TEXT_X;
    angleText.y = textY;
    angleText.textAlign = TEXT_ALIGN;

    // @param {Point2D} point
    DragHandler.register( this, function( point ) {
      fieldMeter.location.set( mvt.viewToModel( point ) );
    } );

    // Register for synchronization with model.
    var that = this;
    fieldMeter.location.addObserver( function( /* Point2D */ location ) {
      var point = mvt.modelToView( location );
      that.x = point.x;
      that.y = point.y;
    } );
    fieldMeter.visible.addObserver( function( visible ) {
      that.visible = visible;
    } );
    fieldMeter.value.addObserver( function( /* Vector2D */ vector ) {
      var NUMBER_OF_DECIMALS = 2;
      magnitudeText.text = vector.getMagnitude().toFixed( NUMBER_OF_DECIMALS );
      xText.text = vector.x.toFixed( NUMBER_OF_DECIMALS );
      yText.text = vector.y.toFixed( NUMBER_OF_DECIMALS );
      angleText.text = MathUtil.toDegrees( vector.getAngle() ).toFixed( NUMBER_OF_DECIMALS );
    } );
  }

  // prototype chaining
  Inheritance.inheritPrototype( FieldMeterDisplay, Easel.Container );

  return FieldMeterDisplay;
} );
