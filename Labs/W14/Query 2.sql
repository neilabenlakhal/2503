--
-- Table structure for table `sample_data`
--

CREATE TABLE `sample_data` (
  `id` int(10) NOT NULL,
  `first_name` varchar(250) NOT NULL,mysql
  `last_name` varchar(250) NOT NULL,
  `age` varchar(30) NOT NULL,
  `gender` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sample_data`
--

INSERT INTO `sample_data` (`id`, `first_name`, `last_name`, `age`, `gender`) VALUES
(1, 'John', 'Smith', '26', 'Male'),
(2, 'Donna', 'Hubber', '24', 'Female'),
(3, 'Peter', 'Parker', '28', 'Male'),
(4, 'Tom', 'Muddy', '32', 'Male'),
(6, 'Lisa', 'Ray', '26', 'Female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sample_data`
--
ALTER TABLE `sample_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sample_data`
--
ALTER TABLE `sample_data`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
