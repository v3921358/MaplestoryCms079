/**
-- JavaScript -------------------------------------------------------------------------------------
	Erev Portal
-- By ---------------------------------------------------------------------------------------------
	?
-- Description ------------------------------------------------------------------------------------
	From Crossroads of Ereve to Training Forest I
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version
-- Additional Comments ----------------------------------------------------------------------------
	Check jobs to enter the map
---------------------------------------------------------------------------------------------------
**/

function enter(pi) {
	if (pi.getPlayer().getJob().getId() >= 1000) {
		pi.warp(130010000, "east00");
	} else {
		pi.getPlayer().dropMessage("Training Forest I is only for Knights!");
	}
	return true;
}