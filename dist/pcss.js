/** PowerCSS - pcss.js
 * Run-time generated and managed CSS
 * Michael S. Mikowski - mike.mikowski@gmail.com
 * See README.md for further documentation.
*/
/*jslint        browser : true, continue : true,
  devel : true,  indent : 2,      maxerr : 50,
  newcap : true,  nomen : true, plusplus : true,
  regexp : true, sloppy : true,     vars : false,
  white : true,    todo : true,  unparam : true
*/
/*global Event, pcss:true */

var pcss = (function () {
  // 1. MODULE SCOPE VARIABLES ============================
  var
    __ObjKeys = Object.keys,
    __Str     = String,

    __j2str     = JSON.stringify,
    __str2j     = JSON.parse,

    __blank     = '',
    __docRef    = document,
    __isArray   = Array.isArray,
    __null      = null,
    __true      = true,
    __timeStamp = Date.now,
    __winRef    = window,

    vMap = {
      _appendChild_    : 'appendChild',
      _apply_          : 'apply',
      _array_          : 'array',
      _bind_           : 'bind',
      _childNodes_     : 'childNodes',
      _createElement_  : 'createElement',
      _createTextNode_ : 'createTextNode',
      _cssText_        : 'cssText',
      _disabled_       : 'disabled',
      _dispatchEvent_  : 'dispatchEvent',
      _getElById_      : 'getElementById',
      _hasOwnProp_     : 'hasOwnProperty',
      _head_           : 'head',
      _id_             : 'id',
      _indexOf_        : 'indexOf',
      _innerHTML_      : 'innerHTML',
      _innerText_      : 'innerText',
      _join_           : 'join',
      _length_         : 'length',
      _log_            : 'log',
      _nodeValue_      : 'nodeValue',
      _object_         : 'object',
      _push_           : 'push',
      _setAttribute_   : 'setAttribute',
      _sheet_          : 'sheet',
      _shift_          : 'shift',
      _slice_          : 'slice',
      _splice_         : 'splice',
      _string_         : 'string',
      _styleSheets_    : 'styleSheets',
      _textContent_    : 'textContent',
      _text_           : 'text',
      _text_css_       : 'text/css',
      _type_           : 'type',
      _undefined_      : 'undefined'
    },

    __0     = 0,
    __1     = 1,
    __2     = 2,
    __n1    = -1,
    __undef = __winRef[ vMap._undefined_ ],
    __console = console,

    // CSS rule keys
    cssKeyMap = {
      __moz_box_sizing_            : '-moz-box-sizing',
      __webkit_font_smoothing_     : '-webkit-font-smoothing',
      __webkit_overflow_scrolling_ : '-webkit-overflow-scrolling',
      __webkit_user_select_        : '-webkit-user-select',
      __moz_user_select_           : '-moz-user-select',
      __o_user_select_             : '-o-user-select',
      _user_select_                : 'user-select',

      _animation_              : 'animation',
      _background_             : 'background',
      _background_color_       : 'background-color',
      _background_image_       : 'background-image',
      _background_position_    : 'background-position',
      _background_repeat_      : 'background-repeat',
      _background_size_        : 'background-size',
      _baseline_               : 'baseline',
      _body_                   : 'body',
      _border_                 : 'border',
      _border_btm_             : 'border-bottom',
      _border_btm_color_       : 'border-bottom-color',
      _border_btm_width_       : 'border-bottom-width',
      _border_collapse_        : 'border-collapse',
      _border_color_           : 'border-color',
      _border_left_            : 'border-left',
      _border_left_color_      : 'border-left-color',
      _border_left_width_      : 'border-left-width',
      _border_radius_          : 'border-radius',
      _border_right_           : 'border-right',
      _border_right_color_     : 'border-right-color',
      _border_right_width_     : 'border-right-width',
      _border_spacing_         : 'border-spacing',
      _border_style_           : 'border-style',
      _border_top_             : 'border-top',
      _border_top_color_       : 'border-top-color',
      _border_top_left_radius_ : 'border-top-left-radius',
      _border_top_width_       : 'border-top-width',
      _border_width_           : 'border-width',
      _bottom_                 : 'bottom',
      _box_shadow_             : 'box-shadow',
      _box_sizing_             : 'box-sizing',
      _clear_                  : 'clear',
      _clip_                   : 'clip',
      _color_                  : 'color',
      _cursor_                 : 'cursor',
      _display_                : 'display',
      _empty_cells_            : 'empty_cells',
      _fill_                   : 'fill',
      _float_                  : 'float',
      _font_family_            : 'font-family',
      _font_size_              : 'font-size',
      _font_style_             : 'font-style',
      _font_weight_            : 'font-weight',
      _height_                 : 'height',
      _left_                   : 'left',
      _line_height_            : 'line-height',
      _list_style_position_    : 'list-style-position',
      _list_style_type_        : 'list-style-type',
      _margin_                 : 'margin',
      _margin_btm_             : 'margin-bottom',
      _margin_left_            : 'margin-left',
      _margin_right_           : 'margin-right',
      _margin_top_             : 'margin-top',
      _max_height_             : 'max-height',
      _max_width_              : 'max-width',
      _min_height_             : 'min-height',
      _min_width_              : 'min-width',
      _opacity_                : 'opacity',
      _outline_                : 'outline',
      _overflow_               : 'overflow',
      _overflow_x_             : 'overflow-x',
      _overflow_y_             : 'overflow-y',
      _padding_                : 'padding',
      _padding_btm_            : 'padding-bottom',
      _padding_left_           : 'padding-left',
      _padding_right_          : 'padding-right',
      _padding_top_            : 'padding-top',
      _position_               : 'position',
      _resize_                 : 'resize',
      _right_                  : 'right',
      _src_                    : 'src',
      _stroke_                 : 'stroke',
      _stroke_opacity_         : 'stroke-opacity',
      _stroke_width_           : 'stroke-width',
      _text_align_             : 'text-align',
      _text_decoration_        : 'text-decoration',
      _text_indent_            : 'text-indent',
      _text_overflow_          : 'text-overflow',
      _top_                    : 'top',
      _transition_             : 'transition',
      _vertical_align_         : 'vertical-align',
      _visibility_             : 'visibility',
      _white_space_            : 'white-space',
      _width_                  : 'width',
      _z_index_                : 'z-index'
    },

    // Common CSS values
    cssValMap = {
      _0_             : '0',
      _1_             : '1',
      _0p_            : '0%',
      _12d5p_         : '12.5%',
      _25p_           : '25%',
      _36d5p_         : '37.5%',
      _50p_           : '50%',
      _62d5p_         : '62.5%',
      _75p_           : '75%',
      _87d5p_         : '87.5%',
      _100p_          : '100%',
      _d125rem_       : '.125rem',
      _d25rem_        : '.25rem',
      _d375rem_       : '.375rem',
      _d5rem_         : '.5rem',
      _d625rem_       : '.625rem',
      _d75rem_        : '.75rem',
      _d875rem_       : '.5rem',
      _1rem_          : '1rem',
      _1d25rem_       : '1.25rem',
      _1d375rem_      : '1.375rem',
      _1d5rem_        : '1.5rem',
      _1d75rem_       : '1.75rem',
      _2rem_          : '2rem',
      _2d5rem_        : '2.5rem',
      _3rem_          : '3rem',
      _200_           : '200',
      _400_           : '400',
      _800_           : '800',
      _x444_          : '#444',
      _x888_          : '#888',
      _xaaa_          : '#aaa',
      _xbbb_          : '#bbb',
      _xccc_          : '#ccc',
      _xddd_          : '#ddd',
      _xeee_          : '#eee',
      _xfff_          : '#fff',
      _absolute_      : 'absolute',
      _antialiased_   : 'antialiased',
      _auto_          : 'auto',
      _block_         : 'block',
      _border_box_    : 'border-box',
      _both_          : 'both',
      _center_        : 'center',
      _center_center_ : 'center center',
      _clip_          : 'clip',
      _collapse_      : 'collapse',
      _contain_       : 'contain',
      _content_box_   : 'content-box',
      _cover_         : 'cover',
      _default_       : 'default',
      _disc_          : 'disc',
      _ellipsis_      : 'ellipsis',
      _fixed_         : 'fixed',
      _font_fixed_    : 'courier, fixed',
      _font_sans_     : 'arial, helvetica, sans-serif',
      _hidden_        : 'hidden',
      _inherit_       : 'inherit',
      _inline_block_  : 'inline-block',
      _italic_        : 'italic',
      _left_          : 'left',
      _line_through_  : 'line-through',
      _middle_        : 'middle',
      _move_          : 'move',
      _no_repeat_     : 'no-repeat',
      _none_          : 'none',
      _normal_        : 'normal',
      _nowrap_        : 'nowrap',
      _outside_       : 'outside',
      _pointer_       : 'pointer',
      _relative_      : 'relative',
      _right_         : 'right',
      _scroll_        : 'scroll',
      _show_          : 'show',
      _solid_         : 'solid',
      _text_          : 'text',
      _top_           : 'top',
      _touch_         : 'touch',
      _transparent_   : 'transparent',
      _underline_     : 'underline',
      _uppercase_     : 'uppercase',
      _vertical_      : 'vertical'
    },

    topCmap = {
      _regen_type_list_ : [
        '_none_', '_merge_', '_prepare_', '_all_', '_use_'
      ]
    },

    //  _vsheet_map_map_
    //    +- `vsheet_id1`
    //       |- _vsheet_id_     : `vsheet_id1`
    //       |- _selector_list_ : `selector_list`
    //       |- _selector_ms_   : `timestamp`
    //       |- _mixin_map_     : `mixin_map`
    //       +- _mixin_ms_      : `timestamp`
    //
    // _cascade_map_map_
    //   |- `cascade_id1`
    //      |- _cascade_id_           : `cascade_id1`
    //      |- _vsheet_id_list_       : `vsheet_id_list`
    //      |- _vsheet_ms_            : `timestamp`
    //      |- _mixin_map_            : {...}
    //      |- _mixin_ms_             : `timestamp`
    //      |- _merged_selector_list_ : `merged_selector_list`
    //      |- _merged_mixin_map_     : `merged_mixin_map`
    //      |- _merged_selector_ms_   : `timestamp`
    //      |- _css_str_              : `cascade_css`
    //      +- _css_ms_               : `timestamp`

    topSmap = {
      _is_enabled_       : __true,
      _el_cascade_list_  : [],

      _global_mixin_map_ : {},
      _global_mixin_ms_  : __0,

      _vsheet_map_map_   : {},
      _cascade_map_map_  : {},
      _style_el_list_    : __undef,
      _style_el_prefix_  : __undef,
      _style_el_idx_     : __n1
    }
    ;
  // end 1. MODULE SCOPE VARIABLES ========================

  // 2. PRIVATE METHODS ===================================
  // 2.1 Private method /cloneData/
  function cloneData ( data ) {
    if ( ! data ) { return data; }
    //noinspection NestedFunctionCallJS
    return __str2j( __j2str( data ) );
  }
  // end 2.1 Private method /cloneData/

  // 2.2 Private method /getVarType/
  function getVarType ( arg ) {
    return __isArray( arg ) ? vMap._array_ : ( typeof arg );
  }
  // end 2.2

  // 2.3 Private method /logIt/
  function logIt () {
    __console.log[ vMap._apply_ ]( __console, arguments );
  }
  // end 2.3

  // 2.4 Private method /publishEvent/
  function publishEvent ( name, data ) {
    var event_obj;

    // Events not supported on IE
    try {
      event_obj = new Event(
        name,
        { bubbles    : true,
          cancelable : false
        }
      );
      event_obj._data_ = data;
    }
    catch( error ) { logIt( error ); return; }
    try {
      __docRef[ vMap._dispatchEvent_ ]( event_obj );
    }
    catch( error ) { logIt( error ); return; }
  }
  // end 2.4

  // 2.5 Private method /writeToStyleEl/
  // TODO: Profile on major browsers
  // This function updates the css_str in the style element
  // ONLY if it appears changed.  This SHOULD be much faster
  // than blindly writing the css_str. However, browsers may already
  // do this check, so it may be redundant. Profile to determine answer.
  //
  function writeToStyleEl ( style_el, css_str ) {
    var text_el, childnode_list;
    // Old Firefox and IE(?)
    if ( style_el[ vMap._hasOwnProp_ ]( vMap._cssText_ ) ) {
      if ( style_el[ vMap._cssText_ ] !== css_str ) {
        style_el[ vMap._cssText_ ] = css_str;
      }
    }
    // New Firefox
    else if ( style_el[ vMap._hasOwnProp_ ]( vMap._textContent_ ) ) {
      if ( style_el[ vMap._textContent_ ] !== css_str ) {
        style_el[ vMap._textContent_ ] = css_str;
      }
    }
    // Webkit
    else {
      childnode_list = style_el[ vMap._childNodes_ ];
      if ( childnode_list && childnode_list[ vMap._length_ ] > __0 ) {
        text_el = childnode_list[ __0 ];
        if ( text_el[ vMap._nodeValue_ ] !== css_str ) {
          text_el[ vMap._nodeValue_ ] = css_str;
        }
      }
      else {
        text_el = __docRef[ vMap._createTextNode_ ]( css_str );
        style_el[ vMap._appendChild_ ]( text_el );
      }
    }
  }
  // end 2.5 Private method /writeToStyleEl/

  // 2.6 Private method /initStyleEls/
  function initStyleEls () {
    var
      head_el         = __docRef[ vMap._head_ ],
      style_el_prefix = topSmap._style_el_prefix_,
      style_el_list   = [],

      i, style_el_id, style_el
      ;

    for ( i = __0; i < __2; i++ ) {
      style_el_id = style_el_prefix +  __Str( i );
      if ( !! __docRef[ vMap._getElById_ ]( style_el_id ) ) {
        throw '_sheet_id_is_already_in_use_ ' + style_el_id;
      }
      // Create element and set properties
      style_el = __docRef[ vMap._createElement_ ]( 'style' );
      style_el[ vMap._setAttribute_ ]( vMap._type_, vMap._text_css_ );
      style_el[ vMap._setAttribute_ ]( vMap._id_, style_el_id );

      // Add to head
      head_el[ vMap._appendChild_ ]( style_el );
      style_el[ vMap._sheet_ ][ vMap._disabled_ ] = __true;
      style_el_list[ vMap._push_ ]( style_el );
    }
    topSmap._style_el_list_ = style_el_list;
  }
  // end 2.6 Private method /initStyleEls/

  // 2.7 Private method /checkVsheetIds/
  function checkVsheetIds( vsheet_id_list ) {
    var
      vsheet_map_map  = topSmap._vsheet_map_map_,
      vsheet_id_count = vsheet_id_list[ vMap._length_ ],
      unknown_id_list = [],

      i, vsheet_id
      ;

    for ( i = __0; i < vsheet_id_count; i++ ) {
      vsheet_id = vsheet_id_list[ i ];
      if ( vsheet_map_map[ vMap._hasOwnProp_ ]( vsheet_id ) ) {
        continue;
      }
      unknown_id_list[ vMap._push_ ]( vsheet_id );
    }
    return unknown_id_list;
  }
  // end 2.7

  // 2.8 Private and Public method /extendRuleMap/
  // Example   : pcss._extendRuleMap_( rule_map, { _color_ : '_x444_' } );
  // Purpose   : A utility to extend a rule_map with new or revised
  //             values. Providing a value of 'null' deletes a key.
  //             pcss._extendRuleMap_( rule_map, { _color_ : null } );
  // Arguments : (positional)
  //             0 : base_map   - the map to be extended
  //             1 : extend_map - the map containing new key-value pairs
  // Settings  : none
  // Throws    : none
  // Returns   : none
  //   base_map is modified, extend_map is not.
  //
  function extendRuleMap ( base_map, arg_extend_map ) {
    var
      extend_map,
      key_list,  key_count,
      rule_key,  rule_data, i
      ;

    if ( getVarType( base_map       ) !== vMap._object_
      || getVarType( arg_extend_map ) !== vMap._object_
    ) { return 'wtf?'; }

    extend_map = cloneData( arg_extend_map );
    key_list   = __ObjKeys( extend_map );
    key_count  = key_list[ vMap._length_ ];

    _KEY_: for ( i = __0; i < key_count; i++ ) {
      rule_key = key_list[ i ];
      rule_data = extend_map[ rule_key ];
      // delete keys will the value of __null
      if ( rule_data === __null ) {
        delete base_map[ rule_key ];
        continue _KEY_;
      }
      base_map[ rule_key ] = extend_map[ rule_key ];
    }
    return base_map;
  }
  // end 2.8 Private and Public method /extendRuleMap/

  // 2.9 Private method /mergeCascade/
  function mergeCascade ( arg_vsheet_id_list, arg_mixin_map ) {
    // 2.9.1 init and args
    var
      vsheet_map_map = topSmap._vsheet_map_map_,

      vsheet_count         = arg_vsheet_id_list[ vMap._length_ ],
      seen_selector_map    = {},
      merged_selector_list = [],

      merged_mixin_map,
      global_mixin_map,

      i, vsheet_id,    vsheet_map,
      selector_list,   vsheet_mixin_map,
      selector_count,

      j, selector_map,     selector_str,
      rule_lock_list,      rule_map,
      clone_selector_map,  merged_rpt_map,
      merged_selector_map, merged_rule_map,
      merged_lock_list,    rule_key_list,
      rule_key_count,
      l, rule_key
      ;
    // end 2.9.1 init and args

    // 2.9.2 merge global and cascade mixin map
    global_mixin_map  = topSmap._global_mixin_map_ || {};
    merged_mixin_map  = cloneData( global_mixin_map );
    extendRuleMap( merged_mixin_map, arg_mixin_map );

    // 2.9.3 Consider each vsheet selector_list in the cascade list
    _VSHEET_: for ( i = __0; i < vsheet_count; i++ ) {
      vsheet_id        = arg_vsheet_id_list[ i ];
      vsheet_map       = vsheet_map_map[ vsheet_id ];
      if ( ! vsheet_map ) {
        logIt( '_cannot_find_vsheet_map_for_id_', vsheet_map );
        continue _VSHEET_;
      }

      // 2.9.3.1 merge vsheet mixin map
      vsheet_mixin_map = vsheet_map._mixin_map_;
      extendRuleMap( merged_mixin_map, vsheet_mixin_map );

      // 2.9.3.2 Consider each selector_map in the selector_list
      selector_list    = vsheet_map._selector_list_ || [];
      selector_count   = selector_list[ vMap._length_ ];
      for ( j = __0; j < selector_count; j++ ) {
        // 2.9.3.2.1 Init selector_map vars
        selector_map   = selector_list[ j ];
        selector_str   = selector_map._selector_str_;
        rule_lock_list = selector_map._rule_lock_list_;
        rule_map       = selector_map._rule_map_;
        merged_rpt_map = seen_selector_map[ selector_str ];
        // end 2.9.3.2.1

        // 2.9.3.2.2 Use previously seen selector data
        if ( merged_rpt_map ) {
          merged_selector_map = merged_rpt_map._selector_map_;
          merged_rule_map     = merged_selector_map._rule_map_;
          merged_lock_list    = merged_rpt_map._rule_lock_list_;

          // 2.9.3.2.2.1 Merge in latest locks
          if ( rule_lock_list ) {
            merged_lock_list[ vMap._push_ ][ vMap._apply_
              ]( merged_lock_list, rule_lock_list );
            merged_rpt_map[ '_lock_on_ ' + __Str( i ) ]
              = __j2str( rule_lock_list );
          }
          // end 2.9.3.2.2.1

          // 2.9.3.2.2.2 Merge rules unless they are locked
          rule_key_list  = ( rule_map && __ObjKeys( rule_map )) || [];
          rule_key_count = rule_key_list[ vMap._length_ ];
          _RULE_: for ( l = __0; l < rule_key_count; l++ ) {
            rule_key = rule_key_list[ l ];
            if ( merged_lock_list[ vMap._indexOf_ ]( rule_key ) > __n1
            ) {
              logIt(
                '_rule_key_locked_for_selector_', selector_str, rule_key
              );
              continue _RULE_;
            }
            merged_rule_map[ rule_key ] = rule_map[ rule_key ];
          }
          // end 2.9.3.2.2.2
        }
        // end 2.9.3.2.2

        // 2.9.3.2.3 Init new selector data
        else {
          // 2.9.3.2.3.1 Clone data and place the **same map**
          // both into the merged_selector_list and the merged_rpt_map
          // as we want fast O(1) access to it.
          //
          clone_selector_map = cloneData( selector_map );
          merged_selector_list[ vMap._push_]( clone_selector_map );
          merged_rpt_map = { _selector_map_ : clone_selector_map };
          // end 2.9.3.2.3.1

          // 2.9.3.2.3.2 Init lock list data
          if ( rule_lock_list ) {
            merged_rpt_map._rule_lock_list_ = cloneData( rule_lock_list );
            merged_rpt_map[ 'lock_on_' + __Str( i ) ]
              = __j2str( rule_lock_list );
          }
          else {
            merged_rpt_map._rule_lock_list_ = [];
          }
          // end 2.9.3.2.3.2
          seen_selector_map[ selector_str ] = merged_rpt_map;
        }
        // end 2.9.3.2.3
      }
      // end 2.9.3.2 Consider each selector_map in the selector_list
    }
    // end 2.9.3 Consider each vsheet in the cascade list

    // 2.9.4 return map of results
    return {
      _merged_selector_list_ : merged_selector_list,
      _merged_mixin_map_     : merged_mixin_map
    };
  }
  // end 2.9 Private method /mergeCascade/

  // 2.10 Private method /makeCssStr/
  function makeCssStr ( merged_selector_list, merged_mixin_map ) {
    // 2.10.1 init and args
    var
      i, j, k,        selector_count,
      selector_map,   selector_str,
      rule_map,       close_str,
      rule_key_list,  rule_key_count,
      rule_key,       rule_data,

      outer_data,       outer_data_type,
      outer_inner_list, inner_data_list,
      inner_data_count, inner_concat_list,

      solve_selector_list, solve_data_type,
      solve_rule_list,     solve_key,
      solve_val_str,       solve_selector_str
      ;
    selector_count = merged_selector_list[ vMap._length_ ];
    solve_selector_list = [];
    // end 2.10.1

    // 2.10.2 Consider each selector map in list
    for ( i = __0; i < selector_count; i++ ) {
      // 2.10.2.1 Init selector_map vars
      selector_map = merged_selector_list[ i ];
      selector_str = selector_map._selector_str_;
      rule_map     = selector_map._rule_map_;
      close_str    = selector_map._close_str_ || __blank;
      // end 2.10.2.1

      // 2.10.2.2 Special case: no rule_map
      if ( ! rule_map ) {
        solve_selector_list[ vMap._push_ ]( selector_str + close_str );
        continue;
      }

      // 2.10.2.3 Consider each rule in rule_map: _OUTER_RULE_
      rule_key_list = __ObjKeys( rule_map );
      rule_key_count = rule_key_list[ vMap._length_ ];
      solve_rule_list = [];
      _OUTER_RULE_ : for ( j = __0; j < rule_key_count; j++ ) {
        rule_key  = rule_key_list[ j ];
        inner_concat_list = __undef;

        if ( cssKeyMap[ vMap._hasOwnProp_ ]( rule_key ) ) {
          solve_key = cssKeyMap[ rule_key ];
        }
        else {
          continue _OUTER_RULE_;
        }

        outer_data = rule_map[ rule_key ];
        outer_data_type = getVarType( outer_data );

        // Support mixin complex data structures
        if ( outer_data_type === vMap._string_
          && merged_mixin_map[ vMap._hasOwnProp_ ]( outer_data )
          && getVarType( merged_mixin_map[ outer_data ] ) !== vMap._string_
        ) {
          outer_data = merged_mixin_map[ outer_data ];
        }

        outer_data_type = getVarType( outer_data );
        inner_data_list = __undef;
        switch ( outer_data_type ) {
          //  Support a single string data type
          case vMap._string_ : inner_data_list = [ outer_data ]; break;

          // Support double array
          case vMap._array_ :
            if ( outer_data[ vMap._length_ ] === __1 ) {
              outer_inner_list = outer_data[ __0 ];
              if ( getVarType( outer_inner_list ) === vMap._array_
                && outer_inner_list[ vMap._length_ ] > __1
              ) {
                inner_data_list = outer_inner_list;
                inner_concat_list = [];
              }
            }
            // Standard single literal value
            if ( ! inner_data_list ) {
              inner_data_list = [ outer_data ];
            }
            break;
          case vMap._object_ :
            inner_data_list = outer_data._alt_list_ || [];
            break;
          default : inner_data_list = [ outer_data ]; break;
        }
        inner_data_count = inner_data_list[ vMap._length_ ];

        // Calc solve_val_str
        _INNER_RULE_ : for ( k = __0; k < inner_data_count; k++ ) {
          rule_data       = inner_data_list[ k ];
          solve_data_type = __isArray( rule_data )
            ? vMap._array_ : getVarType( rule_data );

          switch ( solve_data_type ) {
            case vMap._string_ :
              if ( merged_mixin_map[ vMap._hasOwnProp_ ]( rule_data ) ) {
                solve_val_str = merged_mixin_map[ rule_data ];
              }
              else if ( cssValMap[ vMap._hasOwnProp_ ]( rule_data ) ) {
                solve_val_str = cssValMap[ rule_data ];
              }
              else {
                logIt( '_css_rule_key_not_defined_', rule_data );
                continue _INNER_RULE_;
              }
              break;
            case vMap._array_ :
              solve_val_str = rule_data[ __0 ];
              if ( solve_val_str === __undef ) {
                logIt( '_css_rule_data_not_defined_', solve_key  );
                continue _INNER_RULE_;
              }
              break;
            default :
              logIt( '_css_values_must_be_str_or_ary_' );
              continue _INNER_RULE_;
          }
          // Store rule string
          if ( inner_concat_list ) {
            inner_concat_list[ vMap._push_ ]( solve_val_str );
            if ( k === inner_data_count + __n1 ) {
              solve_rule_list[ vMap._push_ ]( solve_key + ':'
                + inner_concat_list[ vMap._join_ ](' ')
              );
            }
          }
          else {
            solve_rule_list[ vMap._push_ ]( solve_key + ':' + solve_val_str );
          }
        }
      }
      // end 2.10.2.3 Consider each rule in rule_map: _OUTER_RULE_

      solve_selector_str = selector_str + '{';
      solve_selector_str += solve_rule_list[ vMap._length_ ] > __0
        ? solve_rule_list[ vMap._join_ ]( ';' ) +  ';' : __blank;
      solve_selector_str += '}' + close_str;
      solve_selector_list[ vMap._push_ ]( solve_selector_str );
    }
    // end 2.10.2 Consider each selector map in list

    // 2.10.3 return CSS string
    return solve_selector_list[ vMap._join_]( '\n' );
  }
  // end 2.10 Private method /makeCssStr/

  // 2.11 Private method /regenCascade/
  function regenCascade( cascade_map, regen_type ) {
    var
      now_ms     = __timeStamp(),
      cascade_id = cascade_map._cascade_id_,

      merged_ms, result_map, style_el, write_idx, write_el;

    // 2.11.1 Bail on unrecognized regen type
    if ( topCmap._regen_type_list_[ vMap._indexOf_ ]( regen_type ) === __n1 ) {
      logIt( '_regen_type_not_supported_', regen_type );
      return;
    }

    // 2.11.2 _none_ level regen_type
    if ( regen_type === '_none_' ) { return regen_type; }

    // 2.11.3 _merge_ level regen_type
    merged_ms = cascade_map._merged_selector_ms_;
    if ( merged_ms <= cascade_map._vsheet_ms_
      || merged_ms <= cascade_map._mixin_ms_
      || merged_ms <= topSmap._global_mixin_ms_
    ) {
      result_map = mergeCascade(
        cascade_map._vsheet_id_list_, cascade_map._mixin_map_
      );
      cascade_map._merged_selector_list_ = result_map._merged_selector_list_;
      cascade_map._merged_mixin_map_     = result_map._merged_mixin_map_;
      cascade_map._merged_selector_ms_   = now_ms;
      cascade_map._mixin_ms_             = now_ms;
      publishEvent( '_pcss_merged_', cascade_id );
    }
    if ( regen_type === '_merge_' ) { return regen_type; }
    // end 2.11.3

    // 2.11.4 _prepare_ level regen_type
    if ( cascade_map._css_ms_ < cascade_map._merged_selector_ms_ ) {
      cascade_map._css_str_ = makeCssStr(
        cascade_map._merged_selector_list_,
        cascade_map._merged_mixin_map_
      );
      cascade_map._css_ms_ = now_ms;
      publishEvent( '_pcss_prepared_', cascade_id );
    }
    if ( regen_type === '_prepare_' ) { return regen_type; }
    // end 2.11.4

    // 2.11.5 _all_ and _use_ level regen
    if ( regen_type === '_use_' || (
      topSmap._el_cascade_list_[ topSmap._style_el_idx_ ] === cascade_id
    ) ) {
      style_el  = topSmap._style_el_list_[ topSmap._style_el_idx_ ];
      switch( topSmap._style_el_idx_ ) {
        case     __0 : write_idx = __1; break;
        case     __1 : write_idx = __0; break;
        default      : write_idx = __0; break;
      }
      write_el  = topSmap._style_el_list_[ write_idx ];
      writeToStyleEl ( write_el, cascade_map._css_str_ );

      if ( style_el ) {
        style_el[ vMap._sheet_ ][ vMap._disabled_ ] = __true;
      }
      write_el[ vMap._sheet_ ][ vMap._disabled_ ] = ! topSmap._is_enabled_;

      topSmap._style_el_idx_ = write_idx;
      topSmap._el_cascade_list_[ write_idx ] = cascade_id;
      publishEvent( '_pcss_used_', cascade_id );
    }
    // end 2.11.5
    return regen_type;
  }
  // end 2.11 Private method /regenCascade/

  // 2.12 Private method /initCheck/
  // Wrapper function that checks init before proceeding
  //
  function initCheck () {
    var target_fn = this;
    if ( ! topSmap._style_el_prefix_ ) {
      throw '_please_run_initmodule_first_';
    }
    return target_fn[ vMap._apply_ ]( this, arguments );
  }
  // end 2.12
  // end 2. PRIVATE METHODS ===================================

  // 3. EVENT HANDLERS ========================================
  //
  // end 3. EVENT HANDLERS ====================================

  // 4. PUBLIC METHODS ========================================

  // 4.1 Public method /initModule/
  // ------------------------------
  // Example   | pcss._initModule_({ _style_el_prefix_ : 'ns' });
  // Purpose   | Initializes style elements using the provided prefix
  // Arguments | _style_el_prefix_ :
  //           | Optional: A prefix to name-space the two style elements
  //           | If not provided, the prefix 'pcss' will be used.
  // Settings  | none
  // Throws    | A string error object if style elements already exist
  // Returns   | The style prefix, e.g. 'ns-'
  //
  function initModule ( arg_opt_map ) {
    // 4.1.1 init and args
    var
      opt_map         = arg_opt_map               || {},
      style_el_prefix = opt_map._style_el_prefix_ || 'pcss'
      ;

    // 4.1.2 Init element prefix
    if ( ! topSmap._style_el_prefix_ ) {
      style_el_prefix += '-';
      topSmap._style_el_prefix_ = style_el_prefix;
      // Create two style elements '<prefix>-0' and '<prefix>-1'
      initStyleEls();
    }
    // 4.1.3 return prefix
    return topSmap._style_el_prefix_;
  }
  // end 4.1 Public method /initModule/

  // 4.2 Public method /togglePcss/
  // ------------------------------
  // Example   | pcss._togglePcss_( true );
  // Purpose   | Enable or disable PowerCSS
  // Arguments | boolean (optional)
  //           | If not provided, will toggle PowerCSS on or off.
  //           | If provided, true will turn PowerCSS on, and false
  //           | will turn PowerCSS off.
  // Settings  | none
  // Throws    | none
  // Returns   | true (enabled) or false (disabled)
  //
  function togglePcss( arg_do_enable ) {
    var
      style_el  = topSmap._style_el_list_[ topSmap._style_el_idx_ ],
      do_disable;

    do_disable = ( arg_do_enable === __undef )
      ? topSmap._is_enabled_ : ! arg_do_enable;

    if ( style_el ) {
      style_el[ vMap._sheet_ ][ vMap._disabled_ ] = do_disable;
    }

    topSmap._is_enabled_ = ! do_disable;
    return topSmap._is_enabled_;
  }
  // end 4.2 Public method /togglePcss/

  // 4.3 Public method /setGlobalMixinMap/
  // -------------------------------------
  // Example   | pcss._setGlobalMixinMap_({
  //           |   _mode_type_ : 'add',
  //           |   _mixin_map_ : mixin_map
  //           | });
  // Purpose   | Add, change, delete, or update process status for
  //           | a global mixin map id.
  //           |
  // Arguments | _mode_type_  (req) '_add_', '_change_', or '_delete_'
  //           | _mixin_map_  (opt)
  //           | _regen_type_ (opt) '_none_', '_merge_', '_prepare_', or '_all_'
  // Notes     | _regen_type_ defaults to '_all_' if not provided.
  // Settings  | none
  // Throws    | none
  // Returns   | The number of vsheets affected by the change
  //
  function setGlobalMixinMap ( arg_opt_map ) {
    // 4.3.1 Init and arguments
    var
      opt_map    = arg_opt_map || {},

      mixin_map  = opt_map._mixin_map_  || {},
      regen_type = opt_map._regen_type_ || '_all_',

      cascade_map_map = topSmap._cascade_map_map_,

      cascade_id_list, cascade_id_count,
      i, cascade_id,   cascade_map
      ;

    if ( regen_type === '_use_' ) {
      logIt( '_regen_type_use_not_supported_for_this_method_' );
      return;
    }
    // end 4.3.1

    // 4.3.2 Set mixin map
    topSmap._global_mixin_map_ = cloneData( mixin_map );
    topSmap._global_mixin_ms_  = __timeStamp();

    // 4.3.3 Regenerate cascade maps to regen_type level
    cascade_id_list  = __ObjKeys( cascade_map_map );
    cascade_id_count = cascade_id_list[ vMap._length_ ];
    for ( i = __0; i < cascade_id_count; i++ ) {
      cascade_id     = cascade_id_list[ i ];
      cascade_map    = cascade_map_map[ cascade_id ];
      regenCascade( cascade_map, regen_type );
    }
    return cascade_id_count;
  }
  // end 4.3 Public method /setGlobalMixinMap/

  // 4.4 Public method /getAssetIdList/
  // ----------------------------------
  // Example   | vsheet_id_list = pcss._getAssetIdList_({
  //           |   _asset_type_ : '_vsheet_'
  //           | });
  //           | cascade_id_list = pcss._getAssetIdList_({
  //           |   _asset_id_ : '_cascade_'
  //           | });
  // Purpose   | Return the list of all vsheets or cascades.
  // Arguments | _asset_type_ (req), either '_vsheet_' or '_cascade_'
  // Settings  | none
  // Throws    | none
  // Returns   | A list of the asset IDs requested. PowerCSS will
  //           | NEVER use this list pointer, so you may mutate as
  //           | you please.
  //
  function getAssetIdList ( arg_opt_map ) {
    // 4.4.1 Init and arguments
    var
      opt_map    = arg_opt_map || {},
      asset_type = opt_map._asset_type_,
      asset_map_map
      ;
    // end 4.4.1 Init and arguments

    // 4.4.2 Set asset_map
    switch ( asset_type ) {
      case '_cascade_' :
        asset_map_map = topSmap._cascade_map_map_;
        break;
      case '_vsheet_' :
        asset_map_map = topSmap._vsheet_map_map_;
        break;
      default :
        logIt( '_asset_type_not_found_', asset_type );
        asset_map_map = {};
        break;
    }
    // end 4.4.2

    // 4.4.3 return list of keys
    return __ObjKeys( asset_map_map );
  }
  // end 4.4 Public method /getAssetIdList/

  // 4.5 Public method /getAssetJson/
  // Example   | pcss._getAssetJson_({
  //           |   _asset_id_      : '_c01_',
  //           |   _asset_type_    : '_cascade_'
  //           |   _asset_subtype_ : '_vsheet_id_list_'
  //           | })
  // Purpose   | Return a JSON snapshot of a vsheet or cascade.
  // Arguments | _asset_id_ (req) The existing ID of either a cascade
  //           |  or a vsheet.
  //           | _asset_type_ (req) '_vsheet_', '_cascade_',
  //           |   '_global_mixin_', '_el_cascade_list_',
  //           | _asset_subtype_ (opt)
  //           |   '_vsheet_' supports:
  //           |      _vsheet_id_,    _selector_list_,
  //           |      _selector_ms_,  _mixin_map_,
  //           |      _mixin_ms_
  //           |   '_cascade_' supports
  //           |      _cascade_id_,       _vsheet_id_list_
  //           |      _vsheet_ms_,        _mixin_map_
  //           |      _mixin_ms_,         _merged_selector_list_
  //           |      _merged_mixin_map_, _merged_selector_ms_
  //           |      _css_str_          _css_ms_
  // Settings  | none
  // Throws    | none
  // Returns   | A JSON string of the requested asset.
  //           | If there is no corresponding asset, the JSON string
  //           | returned is 'undefined'.
  //
  function getAssetJson ( arg_opt_map ) {
    // 4.5.1 Init and arguments
    var
      opt_map       = arg_opt_map || {},
      asset_type    = opt_map._asset_type_,
      asset_subtype = opt_map._asset_subtype_,
      asset_id      = opt_map._asset_id_,
      asset_map
      ;
    // end 4.5.1 Init and arguments

    // 4.5.2 Set asset_map
    switch ( asset_type ) {
      case '_cascade_' :
        asset_map = topSmap._cascade_map_map_[ asset_id ];
        break;
      case '_vsheet_' :
        asset_map = topSmap._vsheet_map_map_[ asset_id ];
        break;
      case '_global_mixin_' :
        return __j2str( topSmap._global_mixin_map_ );
      case '_el_cascade_list_' :
        return __j2str( topSmap._el_cascade_list_ );
      default :
        logIt( '_asset_type_not_found_', asset_type );
        asset_map = {};
        break;
    }
    // end 4.5.2

    // 4.5.3 Return if no subtype
    if ( ! asset_subtype ) { return __j2str( asset_map ); }

    // 4.5.4 Handle subtype
    if ( asset_map && asset_map[ vMap._hasOwnProp_ ]( asset_subtype ) ) {
      return __j2str( asset_map[ asset_subtype ] );
    }
    return __undef;
  }
  // end 4.5 Public method /getAssetJson/

  // 4.6 Public method /setVsheet/
  // Example   | pcss._setVsheet_({
  //           |   _vsheet_id_     : '_base_',
  //           |   _mode_str_      : '_add_',
  //           |   _selector_list_ : base_selector_list,
  //           |   _mixin_map_     : {},
  //           |   _regen_type_    : '_merge_'
  //           | });
  // Purpose   | Adds, changes, or deletes a vsheet
  // Arguments | _vsheet_id_    (req) The ID for a vsheet
  //           | _mode_str_     (req) '_add_', '_change_', or '_delete_'
  //           | _selector_list (opt) List of selectors this vsheet will
  //           |   represent in PowerCSS format.
  //           | _mixin_map_    (opt) The mixin_map for this vsheet.
  //           | _regen_type_   (opt) '_none_', '_merge_', '_prepare_',
  //           |                      or '_all_'
  // Notes     | _regen_type_ defaults to '_merge_' on Add, '_all_'
  //           | on other operations.
  // Settings  | none
  // Throws    | none
  // Returns   | vsheet_id, or undef on failure
  //
  function setVsheet ( arg_opt_map ) {
    // 4.6.1 Init and arguments
    var
      vsheet_map_map  = topSmap._vsheet_map_map_,
      cascade_map_map = topSmap._cascade_map_map_,

      opt_map         = arg_opt_map || {},
      vsheet_id       = opt_map._vsheet_id_,
      mode_str        = opt_map._mode_str_,
      selector_list   = opt_map._selector_list_,
      mixin_map       = opt_map._mixin_map_,
      regen_type      = opt_map._regen_type_,

      now_ms          = __timeStamp(),

      vsheet_map,       cascade_id_list,
      cascade_id_count, i,
      cascade_id,       cascade_map,
      vsheet_id_list,   vsheet_index
      ;

    if ( regen_type === '_use_' ) {
      logIt( '_regen_type_use_not_supported_for_this_method_' );
      return;
    }

    if ( ! regen_type ) {
      regen_type = mode_str === '_change_' ? '_all_' : '_merge_';
    }
    // end 4.6.1

    //  4.6.2 Get existing vsheet_map and stop forbidden action
    vsheet_map = vsheet_map_map[ vsheet_id ];
    switch ( mode_str ) {
      // If found log warning and return undef
      case '_add_' :
        if ( vsheet_map ) {
          logIt( '_vsheet_already_exists_for_id_', vsheet_id );
          return;
        }
        vsheet_map = { _vsheet_id_ : vsheet_id };
        vsheet_map_map[ vsheet_id ] = vsheet_map;
        break;
      // If not found log warning and return undef
      case '_change_' :
      case '_delete_' :
        if ( ! vsheet_map ) {
          logIt( '_no_vsheet_exists_for_id_', vsheet_id );
          return;
        }
        break;
      default :
        logIt( '_mode_not_supported_', mode_str );
        return;
    }
    // end 4.6.2

    // 4.6.3 Delete, change, or add data as provided
    if ( mode_str === '_delete_' ) {
      delete vsheet_map_map[ vsheet_id ];
    }
    else {
      if ( selector_list ) {
        vsheet_map._selector_list_ = cloneData( selector_list );
        vsheet_map._selector_ms_   = now_ms;
      }
      if ( mixin_map ) {
        vsheet_map._mixin_map_ = cloneData( mixin_map );
        vsheet_map._mixin_ms_  = now_ms;
      }
    }
    // regen has no effect for _add_ mode
    if ( mode_str === '_add_' ) { return vsheet_id; }
    // end 4.6.3

    // 4.6.4 Consider each cascade_map in _cascade_map_map
    cascade_id_list  = __ObjKeys( cascade_map_map );
    cascade_id_count = cascade_id_list[ vMap._length_ ];
    for ( i = __0; i < cascade_id_count; i++ ) {
      cascade_id     = cascade_id_list[ i ];
      cascade_map    = cascade_map_map[ cascade_id ];
      vsheet_id_list = cascade_map._vsheet_id_list_;

      // 4.6.4.1 Update _vsheet_ms_ if vsheet_id in vsheet_id_list
      vsheet_index = vsheet_id_list[ vMap._indexOf_ ]( vsheet_id );
      if ( vsheet_index > __n1 ) {
        cascade_map._vsheet_ms_ = now_ms;

        // 4.6.4.1.1 Remove vsheet id if _delete_
        if ( mode_str === '_delete_' ) {
          vsheet_id_list[ vMap._splice_ ]( vsheet_index, __1 );
        }
        // 4.6.4.1.2 Regenerate to specified level
        regenCascade( cascade_map, regen_type );
      }
      // end 4.6.4.1
    }
    // end 4.6.4
    return vsheet_id;
  }
  // end 4.6 Public method /setVsheet/

  // 4.7 Public method /setCascade/
  // Example   | pcss._setCascade_({
  //           |   _cascade_id_     : '_c01_',
  //           |   _mode_str_       : '_add_',
  //           |   _vsheet_id_list_ : [ '_base_', '_box_' ],
  //           |   _mixin_map_      : {},
  //           |   _regen_type_     : '_none_'
  //           | });
  // Purpose   | Adds, changes, or deletes a cascade
  // Arguments | _cascade_id_     (req) The ID for a cascade
  //           | _mode_str_       (req) '_add_', '_change_', or '_delete_'
  //           | _vsheet_id_list_ (opt) List of vsheet ids in order of
  //           |   application.
  //           | _mixin_map_      (opt) The mixin_map for this cascade.
  //           | _regen_type_     (opt) '_none_', '_merge_', '_prepare_',
  //           |                      or '_all_' (default is _merge_)
  // Notes     | _regen_type_ defaults to '_merge_' on Add, '_all_'
  //           | on other operations.
  // Settings  | none
  // Throws    | none
  // Returns   | cascade_id, or undef on failure
  //
  function setCascade ( arg_opt_map ) {
    // 4.7.1 Init and arguments
    var
      opt_map         = arg_opt_map || {},
      cascade_id      = opt_map._cascade_id_,
      mode_str        = opt_map._mode_str_,
      vsheet_id_list  = opt_map._vsheet_id_list_,
      mixin_map       = opt_map._mixin_map_,
      regen_type      = opt_map._regen_type_,

      cascade_map_map = topSmap._cascade_map_map_,
      now_ms          = __timeStamp(),

      cascade_map, unknown_id_list,
      style_el,    style_el_idx
      ;

    if ( ! regen_type ) {
      regen_type = mode_str === '_change_' ? '_all_' : '_merge_';
    }
    // end 4.7.1

    //  4.7.2 Get existing cascade_map and stop forbidden action
    cascade_map = cascade_map_map[ cascade_id ];
    switch ( mode_str ) {
      // If found log warning and return undef
      case '_add_' :
        if ( cascade_map ) {
          logIt( '_cascade_already_exists_for_id_', cascade_id );
          return;
        }
        cascade_map = {
          _cascade_id_           : cascade_id,
          _vsheet_id_list_       : __undef,
          _vsheet_ms_            : __0,
          _mixin_map_            : __undef,
          _mixin_ms_             : __0,
          _merged_selector_list_ : __undef,
          _merged_mixin_map_     : __undef,
          _merged_selector_ms_   : __0,
          _css_str_              : __blank,
          _css_ms_               : __0
        };
        cascade_map_map[ cascade_id ] = cascade_map;
        break;
      // If not found log warning and return undef
      case '_change_' :
      case '_delete_' :
        if ( ! cascade_map ) {
          logIt( '_no_cascade_exists_for_id_', cascade_id );
          return;
        }
        break;
      default :
        logIt( '_mode_not_supported_', mode_str );
        return;
    }
    // end 4.7.2

    // 4.7.3 Delete, change, or add data as provided
    if ( mode_str === '_delete_' ) {
      delete cascade_map_map[ cascade_id ];
      style_el_idx = topSmap._style_el_idx_;
      if ( topSmap[ style_el_idx ] === cascade_id ) {
        style_el = topSmap._style_el_list_[ style_el_idx ];
        writeToStyleEl( style_el, __blank );
      }
      return cascade_id;
    }

    if ( vsheet_id_list ) {
      unknown_id_list = checkVsheetIds( vsheet_id_list );
      if ( unknown_id_list[ vMap._length_ ] > __0 ) {
        logIt( '_unknown_vsheet_id_provided_', unknown_id_list );
        return;
      }
      cascade_map._vsheet_id_list_ = cloneData( vsheet_id_list );
      cascade_map._vsheet_ms_      = now_ms;
    }
    if ( mixin_map ) {
      cascade_map._mixin_map_ = cloneData( mixin_map );
      cascade_map._mixin_ms_ = now_ms;
    }
    // end 4.7.3

    regenCascade( cascade_map, regen_type );
    return cascade_id;
  }
  // end 4.7 Public method /setCascade/

  // end 4. PUBLIC METHODS ====================================
  return {
    _initModule_          : initModule,
    _extendRuleMap_       : extendRuleMap,
    _togglePcss_          : initCheck[ vMap._bind_ ]( togglePcss          ),
    _setGlobalMixinMap_   : initCheck[ vMap._bind_ ]( setGlobalMixinMap   ),
    _getAssetIdList_      : initCheck[ vMap._bind_ ]( getAssetIdList      ),
    _getAssetJson_        : initCheck[ vMap._bind_ ]( getAssetJson        ),
    _setVsheet_           : initCheck[ vMap._bind_ ]( setVsheet           ),
    _setCascade_          : initCheck[ vMap._bind_ ]( setCascade          )
  };
}());