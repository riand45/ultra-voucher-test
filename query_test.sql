SELECT
	a.id,
	a.name,
	b.name as parent_name
FROM
	user a
LEFT JOIN
	user b
ON
	b.id = a.parent_id
order by
	id asc
