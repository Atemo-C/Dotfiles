//modified version of [this shader](https://github.com/wessles/GLSL-CRT/blob/master/shader.frag)
// Further modified https://github.com/Euro20179/.files/blob/master/.config/hypr/shaders/crt.frag by Atemo Cajaku,
// to remove the rounding.

precision mediump float;
varying vec2 v_texcoord;

uniform sampler2D tex;

void main() {
	vec2 tc = vec2(v_texcoord.x, v_texcoord.y);

	// Get texel, and add in scanline if need be
	vec4 cta = texture2D(tex, vec2(tc.x, tc.y));

	cta.rgb += sin(tc.y * 1250.0) * 0.01;

	// Apply
	gl_FragColor = cta;
}
