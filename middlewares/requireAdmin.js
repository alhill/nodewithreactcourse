module.exports = (req, res, next ) => {
	if (!req.user.isAdmin) {
		return res.status(403).send( { error: "You must be administrator" } );
	}
	
	next();
	
};