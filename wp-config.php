<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'post-slideshow-block' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']!Zk~g429}}ibZyM2r!74%g0xK/1@+nc@:+a=vbUQ`y-9!)<]P/(7;Cte>=%mSZu' );
define( 'SECURE_AUTH_KEY',  '|5{=UobOjfBhJ%[1!-{Q(43.cVqEhX<%[a68B_sMK!}7;pRH:){]F*`cN^<xa)+C' );
define( 'LOGGED_IN_KEY',    'T_|[5g|XafYR{WcMaRdCYcVtq{^lj!/tV#38T8Um>].p@rhM%yYmGvpl9#Y;% O]' );
define( 'NONCE_KEY',        'aT%@=Qx<^D8#(<d!j$yw$|Aqdh#bI~`q&jR*CR.]v]kf=A&BD}I+rVgzu&JO4)8s' );
define( 'AUTH_SALT',        'HEGP`X!p0;m&AVa=}_.1)n&BR37ekkxEXrlT/)LH{Qhx(qCvw9dm0a/5d7;`~i&M' );
define( 'SECURE_AUTH_SALT', 'RBF~xPM$.A-aYv<n!iEQ~0% ;25.Bh@C2>ykO*ri)6kSFZgnw)ir[UGO< O056FV' );
define( 'LOGGED_IN_SALT',   'f)A!Xo#t{[Cjh!$z;q>4(R*I,>KhcZIbg%kHf>/l<?r9~2p1N0wJqP4OTw7%vr2@' );
define( 'NONCE_SALT',       '}kh{[0wLi([m%bh1371D(cE.K$Jx1G1hr&G1.,o8rt2StxcBW_{DQw04shOf%%R!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
