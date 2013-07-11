// Copyright 2002-2012, University of Colorado

/**
 * Model container.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {

    var Dimension2D = require('common/math/Dimension2D');
    var Point2D = require('common/math/Point2D');
    var Range = require('common/math/Range');
    var BarMagnet = require('model/BarMagnet');
    var Compass = require('model/Compass');
    var FieldMeter = require('model/FieldMeter');

    function FaradayModel() {
      // model elements
      this.barMagnet = new BarMagnet( new Point2D( 0, 0 ), new Dimension2D( 250, 50 ), 150, new Range( 0, 300 ), 0 );
      this.fieldMeter = new FieldMeter( new Point2D( -275, 100 ), true, this.barMagnet );
      this.compass = new Compass( new Point2D( -275, -100 ), true, this.barMagnet );
    }

    // Resets all model elements
    FaradayModel.prototype.reset = function() {
      this.barMagnet.reset();
      this.fieldMeter.reset();
      this.compass.reset();
    };

    // Animates the model, called by Easel.Ticker
    FaradayModel.prototype.tick = function() {
      this.compass.tick();
    };

    return FaradayModel;
  } );
