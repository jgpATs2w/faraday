// Copyright 2002-2013, University of Colorado Boulder

/**
 * Displays the Easel frame rate.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {

    var Easel = require( 'easel' );
    var Inheritance = require( 'common/util/Inheritance' );

    function FrameRateNode( foreground ) {
      Easel.Text.call( this, '?', 'bold 20px Arial', foreground ); // constructor stealing
      Easel.Ticker.addListener( this )
    }

    Inheritance.inheritPrototype( FrameRateNode, Easel.Text );

    FrameRateNode.prototype.tick = function() {
      this.text = Easel.Ticker.getMeasuredFPS().toFixed( 0 ) + ' fps';
    };

    return FrameRateNode;
  }
);
