---
pageClass: lynda
---

# Parallel Computing Hardware

## Sequential v.s Parallel Computing
 
Just like the steps in a recipe, a computer program is also a list of instructions that tells a computer what to do.
 
![image-20200908170259392](https://i.imgur.com/Q6QxLWx.png)
![image-20200908170638004](https://i.imgur.com/paStFon.png)
 
- **Sequential Computing**: The program is broken down into a sequence of discreet instructions that a single processor should execute one after another and only execute one instruction at any given moment. The time it takes for a sequential program to run is limited by the speed of the processor.
- **Parallel Computing**: The program is broken down into independent parts that can be  executed simultaneously by different processors. Each processor have to coordinate with each other and some of the steps were dependent on all the previous steps being done. Note that parallel execution doesn't necessarily mean that the execution time would be half due to the complexify from communication. 
 
## Parallel Computing Architectures
 
![image-20200908171346765](https://i.imgur.com/LRhBlRR.png)
 
One of the most widely used systems for classifying multiprocessor architectures is **Flynn's Taxonomy** which distinguishes 4 classes of computer architecture based on two factors: (1) The number of concurrent instruction or control streams (2) The number of data streams.
 
1. **SISD (Single Instruction, Single Data)**: A sequential computer with a single processor unit. It can only execute one series of instructions and can only act on one element of data at a time.
2. **SIMD (Single Instruction, Multiple Data)**: A type of parallel computer with multiple processing units. All of its processors execute the same instruction at any given time but they can each operate on different data element. This type of SIMD architecture is well suited for applications that perform the same handful of operations on a massive set of data elements like image processing. (eg. GPUs)
3. **MISD (Multiple Instruction, Single Data)**: Each processor execute its own separate series of instructions. However, all of those processors are operating on the same single steam of data. Note that the MISD architecture doesn't make much practical sense, so it's not a commonly used architecture.
4. **MIMD (Multiple Instruction, Multiple Data)**: Every processing unit can be executing a different series of instructions and at the same time, each of processors can be operating on a different set of data. Note that the MIMD architecture is the most commonly used architecture influenced taxonomy.
  - **SPMD (Single Program, Multiple Data)**: Multiple processing units are executing a copy of the same single program simultaneously. However, they can each use different data. The different between SPMD and SIMD is that the processors can run asynchronously and the program usually includes conditional logic that allows different tasks within the program to only execute specific parts of the overall function in SPMD architecture.
  - **MPMD (Multiple Program, Multiple Data)**: Processors can be executing different independent programs at the same time. Of course also be operating on different data. Typically in this model, one processing node will be selected as the host or manager, which runs one program that forms out data to the other nodes.
 
## Shared Memory v.s Distributed Memory